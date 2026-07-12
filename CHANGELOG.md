# Changelog

## 2.0.0 — 2026-07-12

- Added deterministic versioned snapshots and `jsonspecs test`.
- Switched validation and Studio to the public diagnostics/introspection API.
- Fixed the generated custom operator contract.
- Bound Studio to `127.0.0.1` and removed permissive CORS by default.
- Added package metadata and pack-ready file whitelist.
- Added a reproducible sibling-repository lockfile workflow and a real packed-consumer smoke test.
- Releases now require the matching published `jsonspecs` version and publish only a sanitized registry-safe tarball from a version tag.
- Build info now records the snapshot format, format version, and source hash.
