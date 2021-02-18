const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
//const DB = require("./databaseConnection");
const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: keys.sqlUser,
  password: keys.sqlPassword,
  database: "store",
  port: 3306,
});

const getConnection = pool.getConnection;

pool.getConnection = function (errback) {
  const startTime = new Date().getTime();
  return getConnection.call(pool, (err, connection) => {
    const endTime = new Date().getTime();
    console.log(
      `Getting a db connection took ${
        endTime - startTime
      } milliseconds. Connection info: ${pool._freeConnections.length} ${
        pool._allConnections.length
      } ${pool._acquiringConnections.length}`
    );
    errback(err, connection);
  });
};

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // pool.query("select * from users where id = " + user.id, function (err, rows) {
  //   done(err, rows[0]);
  // });
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },

    (token, refreshToken, profile, done) => {
      console.log(profile);

      pool.query(
        mysql.format(
          `
        INSERT IGNORE INTO users (email, googleId, firstName, lastName) VALUES(?, ?, ?, ?)
      `,
          [
            profile.emails[0].value,
            profile.id,
            profile.name.givenName,
            profile.name.familyName,
          ]
        ),
        (err, result) => {
          if (err) {
            done(err);
          } else {
            const getUserQuery = mysql.format(
              `
            SELECT * FROM users WHERE users.googleId = ?;
          `,
              [profile.id]
            );

            pool.query(getUserQuery, (err, rows) => {
              if (err) {
                done(err);
              } else {
                done(
                  null,
                  profile
                  //{
                  // user-id: rows[0].id,
                  //googleProfile: profile,

                  // id: rows[0].id,
                  // email: rows[0].email,

                  //token: token,
                  //}
                );
              }
            });
          }
        }
      );
    }
  )
);
