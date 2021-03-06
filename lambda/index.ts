import * as Alexa from 'ask-sdk-core'
import { ExpressAdapter } from 'ask-sdk-express-adapter'
import { CancelOrStopIntentHandler } from './intents/cancelOrStopIntentHandler'
import { FallbackIntentHandler } from './intents/fallbackIntentHandler'
import { HelpIntentHandler } from './intents/helpIntentHandler'
import { LaunchRequestHandler } from './intents/launchRequestHandler'

const skill = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    HelpIntentHandler,
    CancelOrStopIntentHandler,
    FallbackIntentHandler
  )
  .addErrorHandlers()
  .create()

export const expressAdapter = new ExpressAdapter(skill, false, false)
