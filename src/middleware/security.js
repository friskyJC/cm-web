import md5 from 'md5';
import config from '../config';
// import ForbiddenError from '../errors/ForbiddenError';

const validFields = {
  topic: ['code', 'platform', 'ts'],
  dynamic: ['code', 'id', 'platform', 'ts', 'type'],
  topicOld: ['code', 'id', 'platform', 'ts'], // 兼容旧链接验证字段
  dynamicOld: ['code', 'id', 'platform', 'ts', 'type', 'uuid'], // 兼容旧链接验证字段
  invitation: ['platform', 'ts', 'userId'],
  home: ['code', 'platform', 'ts'],
  achievement: ['platform', 'ts', 'userId'],
};

const generateToken = (obj, fields) => {
  let str = '';
  fields.forEach(field => {
    str += obj[field];
  });
  str += config.tokenSalt;
  const result = md5(str);

  return result;
};

const tokenChecker = (req, res, next) => {
  // try {
  //   const url = req.path;
  //   const fields = pickFileds(url, req.query);
  //   if (fields && fields.length > 0) {
  //     const { query } = req;
  //     if (query) {
  //       const { token } = query;
  //       const target = generateToken(query, fields);
  //       // console.info('===================');
  //       // console.info(token, target);
  //       // console.info('===================');
  //       if (token === target) {
  //         next();
  //       } else {
  //         throw new ForbiddenError(403, 'Forbidden');
  //       }
  //     } else {
  //       throw new ForbiddenError(403, 'Forbidden');
  //     }
  //   } else {
  //     next();
  //   }
  // } catch (err) {
  //   next(err);
  // }
  next();
};

// const homeChecker = (req, res, next) => {
//   const { path } = req;
//   if (path === '/' || path === '/hometest') {
//     const { query } = req;
//     if (query) {
//       const { code, ts, platform, token } = query;
//       if (code) {
//         const str = code + platform + ts + config.tokenSalt;
//         const target = md5(str);
//         if (token === target) {
//           next();
//         } else {
//           throw new ForbiddenError(403, 'Forbidden');
//         }
//       }
//     }
//   }
//   next();
// };

export default {
  tokenChecker,
  // homeChecker,
  allPathChecker: [tokenChecker],
  generateToken,
  validFields,
};
