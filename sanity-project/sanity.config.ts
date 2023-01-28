import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

import {dashboardTool} from '@sanity/dashboard'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: '3ans7o2s',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'My Netlify deploys',
          sites: [
            {
              title: 'Website',
              apiId: '0ad7df29-cecf-4be6-b291-ec7641e55a47',
              buildHookId: '63d4ac51ed4c812f2fb8de6d',
              name: 'sanity-gatsby-blog-20-web',
              url: 'https://api.netlify.com/build_hooks/63d4ac51ed4c812f2fb8de6d',
            },
          ],
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
