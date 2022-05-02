import * as Alexa from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'

export const FallbackIntentHandler: Alexa.RequestHandler = {
  canHandle(handlerInput: Alexa.HandlerInput): boolean {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) ===
        'AMAZON.FallbackIntent'
    )
  },
  handle(handlerInput: Alexa.HandlerInput): Response {
    const speechText =
      'Sorry. I cannot help with that. I can help you continue on your adventure by saying visit Italy or vist Australia.'
    const reprompt = `I didn't catch that. What can I help you with?`

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(reprompt)
      .getResponse()
  },
}
