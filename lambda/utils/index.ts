import { HandlerInput } from 'ask-sdk-core'
import * as AWS from 'aws-sdk'
import { GetItemInput, PutItemInput } from 'aws-sdk/clients/dynamodb'
import dotenv from 'dotenv'

dotenv.config()

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID,
  secretAccessKey: process.env.DYNAMODB_SECREY_ACCESS_KEY,
})

const dynamoDB = new AWS.DynamoDB()

const isReturningUser = async (
  handlerInput: HandlerInput
): Promise<boolean> => {
  const { userId } = handlerInput.requestEnvelope.context.System.user
  const params: GetItemInput = {
    TableName: 'AdvgUsers',
    Key: {
      UserId: {
        S: userId,
      },
    },
  }

  const data = await dynamoDB.getItem(params).promise()
  return data.Item ? true : false
}

const addNewUser = (handlerInput: HandlerInput) => {
  const { System } = handlerInput.requestEnvelope.context
  const date = new Date().toISOString().slice(0, 10)
  const params: PutItemInput = {
    TableName: 'AdvgUsers',
    Item: {
      Name: {
        S: 'TBD-USERAPI',
      },
      PlayerNumber: {
        S: `${parseInt((Math.random() * 1000).toString(), 10)}`,
      },
      DeviceId: {
        S: System.device?.deviceId,
      },
      Date: {
        S: date,
      },
      UserId: {
        S: System.user.userId,
      },
      Country: {
        S: 'TBD-ADDRESSAPI',
      },
      Email: {
        S: 'TBD-CUSTINFOAPI',
      },
      MaxTurns: {
        N: '0',
      },
    },
  }
  dynamoDB.putItem(params, (err) => {
    if (err) console.log('Error', err)
  })
}

export { isReturningUser, addNewUser }
