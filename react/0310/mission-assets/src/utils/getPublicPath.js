const getPublicURL = fileNameWithExt => {
  return `${process.env.PUBLIC_URL}/${fileNameWithExt}`;
};

export default getPublicURL;