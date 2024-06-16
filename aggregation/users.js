import userModel from "../models/users.js";

class UserControllerAggregation {
  // show whos email id latter grater then > 20

  static getAggregation = (req, res) => {
    userModel
      .aggregate([
        {
          $match: {
            $expr: { $gt: [{ $strLenCP: "$email" }, 20] },
          },
        },
      ])
      .then((items) => {
        console.log(items);
        res
          .status(200)
          .json({ message: "Items fetched successfully", data: items });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Server error" });
      });
  };
}

export default UserControllerAggregation;
