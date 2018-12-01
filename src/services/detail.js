// import createFetch from '../common/createFetch';
import utility from '../common/utility';

async function getNewsDetail(req, res, next) {
  try {
    const { id } = req.query;
    const data = await utility.fetchData(
      `/tiger-api/api/article/detail?id=${id}`,
      {
        method: 'GET',
      },
    );
    if (+data.code === 0) {
      res.json(utility.buildSuccessRes(data.data));
    } else {
      res.json(utility.buildFailedRes(null));
    }
  } catch (e) {
    next(e);
  }
}

const loadRouter = router => {
  router.get('/api/getNewsDetail', getNewsDetail);
};
export default {
  loadRouter,
};
