module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
      default: {
      connector: 'bookshelf',
      settings: {
      client: 'postgres',
      host: 'ec2-54-73-253-140.eu-west-1.compute.amazonaws.com',
      port: '5432',
      database: 'dfel3un8k62r6l',
      username: 'gftnynttiqojbr',
      password: 'a9005149761a6da8a7b98f65ee7121fd9e7fde4510644a50c0def80a774032d0',
      },
      options: {
      ssl: false,
      },
      },
      },
      });
