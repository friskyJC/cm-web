import security from './security';

const discardUrlSetting = {
  '/topic': {
    template: '/topic/${id}?code=${code}&platform=${platform}&ts=${ts}&token=${token}', // eslint-disable-line
    fields: security.validFields.topic,
  },
  '/dynamic': {
    template: '/dynamic/${uuid}?id=${id}&type=${type}&code=${code}&platform=${platform}&ts=${ts}&token=${token}', // eslint-disable-line
    fields: security.validFields.dynamic,
  },
};

// eslint-disable-next-line
// const fillTemplate = (templateString, templateVars) => new Function("return `" + templateString + "`;").call(templateVars);
const fillTemplate = (url, params) => {
  if (params.token) {
    if (url === '/topic') {
      return `/topic/${params.id}?code=${params.code}&platform=${
        params.platform
      }&ts=${params.ts}&token=${params.token}`;
    }
    return `/dynamic/${params.uuid}?id=${params.id}&type=${params.type}&code=${
      params.code
    }&platform=${params.platform}&ts=${params.ts}&token=${params.token}`;
  }

  if (url === '/topic') {
    return `/topic/${params.id}`;
  }
  return `/dynamic/${params.uuid}?id=${params.id}&type=${params.type}`;
};

const redirect = (req, res, next) => {
  const url = req.path;
  const setting = discardUrlSetting[url];
  if (setting) {
    const params = {
      ...req.query,
    };
    if (params.token) {
      const newToken = security.generateToken(params, setting.fields);
      params.token = newToken;
    }
    const newUrl = fillTemplate(url, params);
    res.redirect(301, newUrl);
  } else {
    next();
  }
};

export default {
  redirect,
};
