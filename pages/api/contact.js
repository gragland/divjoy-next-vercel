const aws = require("aws-sdk");

// Add your AWS credentials here
aws.config.update({
  accessKeyId: "",
  secretAccessKey: "",
  region: "us-west-2"
});

// Load AWS SES
const ses = new aws.SES({ apiVersion: "2010-12-01" });
// Add your email address here
const to = [""];
// Also add your email address as the sender
// Must belong to a verified SES account
const from = "";

export default (req, res) => {
  const body = req.body;

  ses.sendEmail(
    {
      Source: from,
      Destination: { ToAddresses: to },
      Message: {
        Subject: {
          Data: `Contact form submission`
        },
        Body: {
          Text: {
            Data: `
                  Name: ${body.name}
                  Email: ${body.email}
                  Message: ${body.message}
                `
          }
        }
      }
    },
    (err, data) => {
      if (err) {
        res.send({ status: "error" });
      } else {
        res.send({ status: "success" });
      }
    }
  );
};
