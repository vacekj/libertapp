export class AppItem {
  constructor(
    public id: string,
    public name: string,
    public iconPath: string,
    public brandColor: string
  ) {}

  static fromObject(data: any): AppItem | null {
    if (!data) return null

    return new AppItem(
      data?.['id'] as string,
      data?.['name'] as string,
      data?.['iconPath'] as string,
      data?.['brandColor'] as string
    )
  }
}

export const ALL_APP_ITEMS: AppItem[] = [
  {
    id: 'tornado',
    name: 'Tornado Cash',
    iconPath: '/logos/tornado.svg',
    brandColor: '#8EF1AC',
  },
  {
    id: 'aave',
    name: 'AAVE',
    iconPath: '/logos/aave.svg',
    brandColor: '#a95fa3',
  },
  {
    id: 'uniswap',
    name: 'Uniswap V3',
    iconPath: '/logos/uniswap.svg',
    brandColor: '#ff007a',
  },
]
