import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'
import { PostFactory } from 'Database/factories'

export default class PostSeeder extends BaseSeeder {
  public async run () {
    await PostFactory.createMany(100)
  }
}
