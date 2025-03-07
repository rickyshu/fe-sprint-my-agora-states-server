const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);

  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const findIdx = discussionsData.findIndex((el) => el.id === +id);
    console.log(findIdx);
    if (findIdx < 0) {
      return res.status(404).json("Not Found");
    } else {
      res.status(200).json(discussionsData[findIdx]);
    }
  }

};

module.exports = {
  discussionsController,
};
