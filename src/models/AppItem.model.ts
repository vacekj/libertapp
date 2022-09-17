export class AppItem {
  constructor(
    public id: string,
    public name: string,
    public iconPath: string,
    public brandColor: string,
    public description?: string,
    public tags?: string[],
    public changes?: string[],
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
      data?.['changes'] as string[],
      data?.['isFetched'] as boolean
    )
  }
}

export const ALL_APP_ITEMS: AppItem[] = [
  {
    id: 'tornado',
    name: 'Tornado Cash',
    description:
      'Fully decentralized cryptocurrency tumbler that mixes funds with others, so as to obscure the trail back to the funds.',
    tags: ['DeFi', 'Privacy'],
    changes: ['Made it great again', 'Made it faster'],
    iconPath: '/logos/tornado.svg',
    brandColor: '#8EF1AC',
    isFetched: true,
  },
  {
    id: 'aave',
    name: 'AAVE',
    description:
      'A protocol to create non-custodial liquidity markets to earn interest on supplying and borrowing assets with a variable or stable interest rate.',
    tags: ['DeFi', 'Yield'],
    changes: ['Made it great again', 'Made it faster'],
    iconPath: '/logos/aave.svg',
    brandColor: '#a95fa3',
    isFetched: true,
  },
  {
    id: 'uniswap',
    name: 'Uniswap V3',
    description: 'Uniswap is a decentralized, non-custodial cryptocurrency exchange (or DEX).',
    tags: ['DeFi', 'DEX'],
    changes: ['Made it great again', 'Made it faster'],
    iconPath: '/logos/uniswap.svg',
    brandColor: '#ff007a',
    isFetched: true,
  },
  {
    id: 'lenster',
    name: 'Lenster',
    description:
      'Lenster is a frontend for Lens Protocol which is a composable and decentralized social graph.',
    tags: ['Social'],
    iconPath: '/logos/lenster.svg',
    brandColor: '#8b5cf5',
    isFetched: false,
  },
  {
    id: 'liquity',
    name: 'Liquity',
    description:
      'Liquity is a decentralized borrowing protocol that allows you to draw 0% interest loans. Loans are paid out in the LUSD stablecoin.',
    tags: ['DeFi', 'Yield', 'Stablecoin'],
    iconPath: '/logos/liquity.svg',
    brandColor: '#1542cd',
    isFetched: false,
  },
]
