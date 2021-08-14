import Factory from '@ioc:Adonis/Lucid/Factory'
import Post from 'App/Models/Post'

export const PostFactory = Factory
  .define(Post, ({ faker }) => {
    return {
      title: faker.lorem.words(6),
      summary: faker.lorem.lines(2)
    }
  })
  .build()
