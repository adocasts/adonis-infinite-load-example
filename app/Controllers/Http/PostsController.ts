import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post';

export default class PostsController {
  private perPage = 10

  /**
   * Displays home page for posts
   * This is our initial list of 10 posts
   * @param param0 
   * @returns 
   */
  public async index ({ view }: HttpContextContract) {
    const page = await Post.query().paginate(1, this.perPage)

    return view.render('posts/index', { page })
  }

  /**
   * Renders and returns html and page info for a specific page worth of posts
   * This is what we use to incrementally continue our initial list
   * @param param0 
   * @returns 
   */
  public async paginate({ response, params, view }: HttpContextContract) {
    const page = await Post.query().paginate(params.page, this.perPage)
    const html = await view.render('components/post_list', { posts: page })

    return response.json({ html, page })
  }
}
