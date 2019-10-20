const Mailchimp = require("mailchimp-api-v3");

// Add your Mailchimp credentials here
const apiKey = "";
const listId = "";
const mailchimp = new Mailchimp(apiKey);

export default (req, res) => {
  const body = req.body;

  mailchimp
    .request({
      method: "POST",
      path: "/lists/" + listId + "/members",
      body: {
        email_address: body.email,
        // Set status to "subscribed" to disable double-opt-in
        status: "pending"
      }
    })
    .then(result => {
      res.send({ status: "success" });
    })
    .catch(err => {
      res.send({ status: "error" });
    });
};
