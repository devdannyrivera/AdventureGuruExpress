import * as Alexa from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'
import { getRandomFact } from '../utils'

export const CancelOrStopIntentHandler: Alexa.RequestHandler = {
  canHandle(handlerInput: Alexa.HandlerInput): boolean {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      ['AMAZON.CancelIntent', 'AMAZON.StopIntent'].includes(
        Alexa.getIntentName(handlerInput.requestEnvelope)
      )
    )
  },
  async handle(handlerInput: Alexa.HandlerInput): Promise<Response> {
    const speechText = `Goodbye! Did you know? ${await getRandomFact()} <break time='1s'/> New adventures to Egypt, Egland and Greece coming soon!`

    return handlerInput.responseBuilder.speak(speechText).getResponse()
  },
}
