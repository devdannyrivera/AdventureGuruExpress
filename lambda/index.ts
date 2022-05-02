import * as Alexa from 'ask-sdk-core'
import { ExpressAdapter } from 'ask-sdk-express-adapter'
import { LaunchRequestHandler } from './intents/launchRequestHandler'

const skill = Alexa.SkillBuilders.custom()
  .addRequestHandlers(LaunchRequestHandler)
  .addErrorHandlers()
  .create()

export const expressAdapter = new ExpressAdapter(skill, false, false)
