module.exports = ({ env }) => ({
  upload: {
    provider: "google-cloud-storage",
    providerOptions: {
      bucketName: "staging.strapi-tut-4b2b4.appspot.com",
      publicFiles: true,
      uniform: false,
      basePath: "",
      serviceAccount: env.json("GCP_SERVICE_ACCOUNT"),
    },
  },
});
