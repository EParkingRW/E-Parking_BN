import responses from '../responses';
import 'dotenv/config';

const Vehicles = {
    '/vehicles/entrance': {
        post: {
          tags: ['Vehicles'],
          security: [
            {
              JWT: [],
            },
          ],
          summary: 'Register new vehicle',
          parameters: [
            {
                in: 'formData',
                name: 'plateText',
                required: true,
            },
            {
              name: 'photo',
              in: 'formData',
              required: true,
              type: 'file',
            },
          ],
          consumes: ['application/json'],
          responses,
        },
      },
    '/vehicles/exit': {
      put: {
        tags: ['Vehicles'],
        security: [
          {
            JWT: [],
          },
        ],
        summary: 'View Exit vehicle',
        parameters: [
          {
              in: 'body',
              name: 'plateText',
              required: true,
              schema:{
                example:{
                  plateText:"RAB123C"
                }
              }
          }
        ],
        consumes: ['application/json'],
        responses,
      },
    },
    '/vehicles': {
      get: {
        tags: ['Vehicles'],
        security: [
          {
            JWT: [],
          },
        ],
        summary: 'retreive all vehicles',
        parameters: [],
        consumes: ['application/json'],
        responses,
      },
    },
}
export default Vehicles
