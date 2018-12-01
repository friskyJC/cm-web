const getDisplayTime = (score, date) => {
  let dateText = '';
  const hours = (new Date().getTime() - score) / 1000 / 3600;
  if (hours < 1) {
    dateText = '刚刚';
  } else if (hours >= 1 && hours < 24) {
    dateText = `${Math.floor(hours)}小时前`;
  } else if (hours >= 24 && hours < 48) {
    dateText = '1天前';
  } else if (hours >= 48 && hours < 72) {
    dateText = '2天前';
  } else {
    dateText = date.substr(5, 6);
  }
  return dateText;
};

export default { getDisplayTime };
