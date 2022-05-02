import * as Alexa from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'
import { isReturningUser, addNewUser } from '../utils'

const WELCOME_MESSAGE = `Unleash your inner adventurer and explore the
    world and way beyond. On your adventure, <break time='1s'/> you start with
    <prosody volume='x-loud'> a lot </prosody> of money and energy.
    But the choices you make will either increase or decrease them.
    Your adventure ends when you either run out of money or energy.
    <say-as interpret-as='interjection'>Stay on your adventure as long as you can</say-as><break time='1s'/> before it ends!
    Start by saying visit <voice name='Giorgio'>Italy</voice> or visit <voice name='Nicole'>Australia</voice>`

const VISIT_COUNTRY_REPROMPT = `Do you want to visit <voice name="Giorgio">Italy</voice> or <voice name="Nicole">Australia</voice>?`

export const LaunchRequestHandler: Alexa.RequestHandler = {
  canHandle(handlerInput: Alexa.HandlerInput): boolean {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest'
    )
  },
  async handle(handlerInput: Alexa.HandlerInput): Promise<Response> {
    let speechText = WELCOME_MESSAGE
    const repromptText = VISIT_COUNTRY_REPROMPT

    if (await isReturningUser(handlerInput)) {
      speechText = 'Welcome back, adventurer!'
    } else {
      addNewUser(handlerInput)
    }

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(repromptText)
      .withSimpleCard('Welcome Adventurer', speechText)
      .getResponse()
  },
}
