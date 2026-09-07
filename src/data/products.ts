export type ProductStatus = 'live' | 'in-development';

export type ProductLinkType = 'overview' | 'documentation' | 'publication';

export interface ProductLink {
  label: string;
  href: string;
  type: ProductLinkType;
  external?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  status: ProductStatus;
  statusLabel: string;
  category: string;
  description: string;
  audience: string;
  capabilities: readonly string[];
  image: string;
  links: readonly ProductLink[];
}

/**
 * The public product lineup. Keep this list authoritative for product-facing
 * pages and machine-readable summaries; do not add roadmap ideas here until
 * they are part of Cafecito's public lineup.
 */
export const products = [
  {
    slug: 'beans',
    name: 'Beans',
    status: 'live',
    statusLabel: 'Live',
    category: 'News & blogs API',
    description:
      'An aggregation and search service for news and blogs, with semantic search, practical filtering, clean JSON, and MCP support for AI workflows.',
    audience: 'Developers, AI agents, and teams building RAG or media-monitoring workflows.',
    capabilities: ['News and blog aggregation', 'Semantic search', 'Rich filtering', 'JSON API and MCP'],
    image: '/images/beans.png',
    links: [
      { label: 'Beans product overview', href: '/beans/', type: 'overview' },
      {
        label: 'Beans API and MCP documentation',
        href: 'https://developer.cafecito.tech/howtos/beans-howto',
        type: 'documentation',
        external: true,
      },
    ],
  },
  {
    slug: 'espresso',
    name: 'Espresso',
    status: 'live',
    statusLabel: 'Live',
    category: 'Market intelligence suite',
    description:
      'A curated intelligence suite combining the Espresso API and MCP with publications, event digests, synthesized signals, tags, and relationships.',
    audience: 'Developers, analysts, dashboards, and AI agents that need high-signal market intelligence.',
    capabilities: ['Event and signal digests', 'Semantic search', 'Tags and relationships', 'API, MCP, and publications'],
    image: '/images/espresso.png',
    links: [
      { label: 'Espresso product overview', href: '/espresso/', type: 'overview' },
      {
        label: 'Espresso API and MCP documentation',
        href: 'https://developer.cafecito.tech/howtos/espresso-howto',
        type: 'documentation',
        external: true,
      },
      {
        label: 'Espresso Publications',
        href: 'https://espresso.cafecito.tech/',
        type: 'publication',
        external: true,
      },
    ],
  },
  {
    slug: 'cortado',
    name: 'Cortado',
    status: 'in-development',
    statusLabel: 'In development',
    category: 'Social automation',
    description:
      'A planned social media automation product for consistent posting, cleaner campaigns, and less manual wrangling.',
    audience: 'Small businesses and consultants who need repeatable social publishing workflows.',
    capabilities: ['Social media automation', 'Campaign workflows', 'Consistent publishing'],
    image: '/images/cortado.png',
    links: [],
  },
  {
    slug: 'medicafe',
    name: 'MediCafe',
    status: 'in-development',
    statusLabel: 'In development',
    category: 'Medical operations',
    description:
      'A planned medical billing automation product focused on reducing claim denials, paperwork friction, and operational overhead.',
    audience: 'Medical practices and operations teams managing repetitive billing workflows.',
    capabilities: ['Medical billing automation', 'Claims workflows', 'Operational support'],
    image: '/images/medicafe.png',
    links: [],
  },
] as const satisfies readonly Product[];

export const liveProducts = products.filter((product) => product.status === 'live');
export const inDevelopmentProducts = products.filter((product) => product.status === 'in-development');
