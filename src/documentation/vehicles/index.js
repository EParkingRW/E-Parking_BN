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
    '/vehicles/range': {
      post: {
        tags: ['Vehicles'],
        security: [
          {
            JWT: [],
          },
        ],
        summary: 'retreive all vehicles in certain date range',
        parameters: [
          {
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              example: {
                startingDate:"1/1/2021",
                endingDate:"12/12/2022"
              },
            },
          },
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
