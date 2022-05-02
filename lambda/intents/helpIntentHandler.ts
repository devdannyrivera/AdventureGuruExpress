import * as Alexa from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'

export const HelpIntentHandler: Alexa.RequestHandler = {
  canHandle(handlerInput: Alexa.HandlerInput): boolean {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent'
    )
  },
  handle(handlerInput: Alexa.HandlerInput): Response {
    const speechText = `Hello, adventurer! It's good to see you! To play this game, start by saying, visit Italy or visit Australia. If you're stuck on a hard level, say speak to the guide. Don't forget that your wealth or energy either increase or decrease based on the choices you make while on your adventure. When you run out of either, the game ends.`

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse()
  },
}
