// catamel-psiconfig
"use strict";
var p = require("../package.json");
var version = p.version.split(".").shift();
module.exports = {
  restApiRoot: "/api" + (version > 0 ? "/v" + version : ""),
  host: process.env.HOST || "0.0.0.0",
  port: process.env.PORT || 3000,
  pidPrefix: "20.500.11935",
  doiPrefix: "10.16907",
  policyPublicationShiftInYears: 3,
  policyRetentionShiftInYears: 10,
  metadataKeysReturnLimit: 100,
  metadataParentInstancesReturnLimit: 10,
  site: "PSI",
  defaultManager: "scicatingestor@psi.ch",
  facilities: ["SLS", "SINQ", "SWISSFEL", "SmuS"],
  jobMessages: {
    jobSubmitted: "Submitted for immediate execution",
    jobSubmittedDelayed: "Submitted for delayed execution",
    jobForwarded: "Forwarded to archive system",
    jobStarted: "Execution started",
    jobInProgress: "Finished by %i percent",
    jobSuccess: "Successfully finished",
    jobError: "Finished with errors",
    jobCancel: "Cancelled"
  },
  smtpSettings: {
    auth: JSON.parse(process.env.MAIL_AUTH),
    aadEndpoint: "https://login.microsoftonline.com",
    graphEndpoint: "https://graph.microsoft.com"
  },
  expressSessionSecret: "asecret",
  smtpMessage: {
    from: "dacatmail@psi.ch",
    replyTo: "scicatarchivemanager@psi.ch",
    subject: "[SciCat " + process.env.ENV + "]",
  },
  queue: "rabbitmq",
  logbook: {
    enabled: false
  }
};