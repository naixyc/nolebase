export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'Lao Mo',
    avatar: '',
    username: 'naixyc',
    title: 'Lao Mo Blog 创作者',
    desc: '拖延症晚期患者',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/naixyc' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/' },
    ],
    nameAliases: ['nekomeowww', '绚香猫', '絢香猫', 'Neko Ayaka', 'Ayaka Neko'],
    emailAliases: ['neko@ayaka.moe'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
