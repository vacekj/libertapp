export class AppItem {
  constructor(
    public id: string,
    public name: string,
    public iconPath: string,
    public brandColor: string,
    public description?: string,
    public tags?: string[],
    public isFetched?: boolean
  ) {}

  static fromObject(data: any): AppItem | null {
    if (!data) return null

    return new AppItem(
      data?.['id'] as string,
      data?.['name'] as string,
      data?.['iconPath'] as string,
      data?.['brandColor'] as string,
      data?.['description'] as string,
      data?.['tags'] as string[],
      data?.['isFetched'] as boolean
    )
  }
}

export const ALL_APP_ITEMS: AppItem[] = [
  {
    id: 'tornado',
    name: 'Tornado Cash',
    description:
      'Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.',
    tags: ['DeFi', 'Privacy'],
    iconPath: '/logos/tornado.svg',
    brandColor: '#8EF1AC',
    isFetched: true,
  },
  {
    id: 'aave',
    name: 'AAVE',
    description:
      'Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.',
    tags: ['DeFi', 'Yield'],
    iconPath: '/logos/aave.svg',
    brandColor: '#a95fa3',
    isFetched: true,
  },
  {
    id: 'uniswap',
    name: 'Uniswap V3',
    description:
      'Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.',
    tags: ['DeFi', 'DEX'],
    iconPath: '/logos/uniswap.svg',
    brandColor: '#ff007a',
    isFetched: true,
  },
  {
    id: 'lenster',
    name: 'Lenster',
    description:
      'Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.',
    tags: ['Social'],
    iconPath: '/logos/lenster.svg',
    brandColor: '#8b5cf5',
    isFetched: false,
  },
  {
    id: 'liquity',
    name: 'Liquity',
    description:
      'Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.',
    tags: ['DeFi', 'Yield', 'Stablecoin'],
    iconPath: '/logos/liquity.svg',
    brandColor: '#1542cd',
    isFetched: false,
  },
]
