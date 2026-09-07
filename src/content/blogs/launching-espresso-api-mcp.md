---
title: "Launching Espresso API & MCP"
description: "Curated market intelligence for AI agents, dashboards, automated briefings, and RAG pipelines."
publishedAt: 2026-06-30
type: announcement
tags: ["espresso", "api", "mcp", "business-intelligence", "agents"]
---

Hey gang, I'm back with more fresh shit from the kitchen.

It is my pleasure to introduce [Project Cafecito](https://cafecito.tech/)'s next product: [Espresso API & MCP](https://developer.cafecito.tech/howtos/espresso-howto).

The API is part of the larger Espresso product suite, which also includes Espresso Publications: [Editorials](https://espresso.cafecito.tech/), [X](https://x.com/espressovibz), and [Threads](https://www.threads.com/@espresso.sips), our curated digests and deeper human-readable analysis built on the same high-signal intelligence layer.

Think of it as concentrated shots of structured intelligence: event digests, synthesized signals, tags, and relationships, served fresh for dashboards, monitoring workflows, and AI agents.

![Espresso API & MCP banner](/images/espresso-banner.png)

Like everything we ship these days, it comes with a full MCP server so your agents can sip directly without burning tokens on JSON parsing.

## How Events and Signals Are Produced

Events are generated from a wide range of public data sources: product price changes, stock market movements, SEC filings, earnings reports, product announcements, corporate partnerships, and more.

Signals are the abstraction layer on top. They combine multiple similar events across an extended timeline to identify event chains, causal relationships, and commonality between various entities.

## What Espresso Actually Gives You

- Clean market event and signal records with timestamps and domain-specific fields like `actions`, `events`, `impact_level`, `macro_context`, and `cross_domain_impacts`.
- Semantic search with adjustable accuracy.
- Tag filtering.
- Cross-event relationships.
- Token-optimized, MCP-friendly responses.

## Quick Start + Python Examples

```python
import os
import requests

API_KEY = os.environ["CAFECITO_API_KEY"]
BASE_URL = "https://api.cafecito.tech"

headers = {"Authorization": f"Bearer {API_KEY}"}
```

### Semantic Search for Signals

Plain text responses work especially well for MCP servers and agents.

```python
resp = requests.get(
    f"{BASE_URL}/espresso/signals",
    headers=headers,
    params={
        "q": "market volatility and interest rate impact",
        "acc": 0.75,
        "limit": 5,
        "response_type": "text",
    },
    timeout=30,
)
resp.raise_for_status()
print(resp.text)
```

### Filter Signals by Tags

```python
resp = requests.get(
    f"{BASE_URL}/espresso/signals",
    headers=headers,
    params={
        "tags": ["usa", "policy_reform"],
        "from": "2026-05-01",
        "limit": 10,
    },
    timeout=30,
)
resp.raise_for_status()
print(resp.json())
```

### Combine Semantic Search and Tags

```python
resp = requests.get(
    f"{BASE_URL}/espresso/signals",
    headers=headers,
    params={
        "q": "regulatory changes affecting tech",
        "tags": ["regulation", "openai"],
        "acc": 0.8,
        "limit": 8,
    },
)
resp.raise_for_status()
print(resp.json())
```

## Sample Response Body: Events

```json
[
  {
    "actions": [
      "2026-06-28 Firefighters died and injuries occurred at Wyoming-Utah border.",
      "2026-06-28 Large wildfire destroyed parts of ski resorts."
    ],
    "briefing": "On June 28, 2026, three U.S. firefighters died while battling rapidly spreading wildfires near the Colorado-Utah border; approximately 100 sq km burned. Temperatures reached 34 C with strong winds, prompting mass evacuations. The Snyder Fire merged with others, causing significant damage to infrastructure like ski resorts. Causes include severe drought and human factors. This incident reflects escalating regional wildfire risks driven by climate change.",
    "companies": [
      "us_federal",
      "us_state"
    ],
    "cross_domain_impacts": [
      "public_safety: Increased risk of civilian casualties.",
      "tourism: Disruption of winter sports facilities.",
      "environmental: Habitat loss in mountainous areas."
    ],
    "event_type": "wildfire_outbreak",
    "future_outlook": "Continued extreme fire seasons expected without mitigation efforts.",
    "id": "091726f8-421a-566d-9db8-339625f2ed9e",
    "impact_level": "high",
    "macro_context": "western_us_climate_crisis",
    "regions": [
      "colorado",
      "utah"
    ],
    "reported": "2026-06-28T22:49:07Z",
    "tags": [
      "wildfire",
      "climate_change",
      "us",
      "emergency_response"
    ]
  },
  {
    "actions": [
      "2026-06-28 Governments of United States and Iran agree to cease fire",
      "2026-06-30 Bilateral talks scheduled in Oruz"
    ],
    "briefing": "On June 28, 2026, U.S.-Iran governments reached an emergency agreement halting military clashes amid regional tensions. The pause prevents broader war while resuming negotiations by June 30 focused on Ormuz Strait security. This diplomatic step averts immediate market shocks but depends on both sides lowering aggressive rhetoric for tangible outcomes.",
    "cross_domain_impacts": [
      "energy_markets: Reduced oil volatility expected",
      "security_framework: Gulf stability improved temporarily"
    ],
    "event_type": "diplomatic_ceasefire",
    "future_outlook": "Talks may stabilize but risk re-escalation without sustained engagement.",
    "id": "6b4562d2-0a5c-540f-a39e-f1d5cad4ee5f",
    "impact_level": "high",
    "macro_context": "middle_east_conflict_resolution",
    "products": [
      "petroleo"
    ],
    "regions": [
      "gulf",
      "ormuz"
    ],
    "reported": "2026-06-28T21:52:00Z",
    "tags": [
      "diplomacy",
      "gulf",
      "iran",
      "us",
      "fuel"
    ]
  }
]
```

Full documentation is available in the [Developer Portal](https://developer.cafecito.tech/introduction).

## Who Is This For?

If you're building AI agents, executive dashboards, automated briefings, or RAG pipelines that need real business, market, and policy context, Espresso is the noise-free high-signal layer you've been missing.

## Current Status

v0.1 is live and open. It's early, and we're still pruning bugs and adding more signals, but it's already useful enough that I'm using it internally.

[Try Espresso here](https://developer.cafecito.tech/api/espresso) or [get your API key and full docs](https://developer.cafecito.tech/howtos/api-keys).

## So... What Now?

Fire it up and start sipping. It's free for a while dude!

Drop a comment and tell me:

- What signals or use cases would make this 10x more useful?
- Any brutal feedback?
- Or just share what you're building.

I read every single reply. Yes, even the mean ones.

Happy building. May your signals stay strong and your agents well-informed.

P.S. This is part of the growing Cafecito stack: Beans, Espresso, and more brewing. If you liked the no-BS vibe from the Beans launch, you'll enjoy what is coming next.

See you in the comments.

## Espresso vs Beans: When to Use Which

[Beans API](https://developer.cafecito.tech/howtos/beans-howto) is your bare metal news and blogs API. You query it when you want raw content being published by different publishers, authors, and news sites. It's great for RAG, full article retrieval, or when you need the original source material.

Oh, by the way, we just added a new route for tracking content propagation across publishers and mentions on social media. It's good shit. [Check it out](https://developer.cafecito.tech/api/beans).

Espresso API is the structured, curated market intelligence layer. It takes multiple information sources, cross-correlates them, and gives you the data that actually matters for business decision-making, without all the pointless crying, whining, bitching, and moaning noise.

In short:

- Beans = the full firehose.
- Espresso = the refined shot you actually drink.
