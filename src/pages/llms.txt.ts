export const prerender = true;

const content = `# Project Cafecito

> Project Cafecito builds practical AI tools and workflows for independent professionals and small businesses.

## Canonical sources

- Website: https://cafecito.tech/
- Company overview: https://cafecito.tech/docs/overview/
- About the founders: https://cafecito.tech/docs/about-us/
- Product updates: https://cafecito.tech/blogs/
- Developer portal: https://developer.cafecito.tech/

## Live products

### Beans

- Status: live.
- Description: News and blogs aggregation and search service with semantic query search, practical filtering, clean JSON output, and MCP support.
- Product page: https://cafecito.tech/beans/
- Developer documentation: https://developer.cafecito.tech/howtos/beans-howto

### Espresso

- Status: live.
- Description: Market intelligence suite with an API, event digests, synthesized signals, tags, relationships, and human-readable publications for dashboards, monitoring workflows, and AI agents.
- Product page: https://cafecito.tech/espresso/
- Developer documentation: https://developer.cafecito.tech/howtos/espresso-howto
- Publications: https://espresso.cafecito.tech/

## Products in development

### Cortado

- Status: in development.
- Description: Social media automation for consistent posting and campaign workflows.
- No public product page is currently available.

### MediCafe

- Status: in development.
- Description: Medical billing automation intended to reduce claim denials and paperwork friction.
- No public product page is currently available.

## Contact

- Contact and project issues: https://github.com/soumitsalman/cafecito/issues/new?template=general_contact.yml
`;

export function GET() {
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
