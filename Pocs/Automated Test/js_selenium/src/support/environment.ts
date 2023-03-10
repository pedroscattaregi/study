import dotenv from 'dotenv'

dotenv.config()
const args = process.env

export const environment = {
  BASE_URL: args.BASE_URL ?? ''
}
