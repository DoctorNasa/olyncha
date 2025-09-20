# Best Practices for Agentic Coding

## Guiding Principles
- Treat system, developer, and user instructions as a stack of contracts; read them all before acting and resolve conflicts by priority.
- Stay goal-oriented but cautious: prefer smaller, reversible changes and gather context before editing.
- Think aloud in your analysis channel so your reasoning trail is auditable and easy to follow.
- Default to deterministic, reproducible workflows; avoid relying on unstated assumptions or hidden state.

## Planning
- Decide early whether the task warrants an explicit plan; create one for multi-step or non-trivial requests, and keep it updated as you progress.
- Break work into observable milestones so you can verify progress incrementally and roll back if needed.
- Surface ambiguities or missing information quickly instead of guessing; confirm requirements when in doubt.

## Execution Discipline
- Inspect relevant code and tests before changing anything to understand intent and edge cases.
- Work within existing conventions for style, tooling, and project structure; reuse helpers instead of inventing new patterns.
- Make focused edits and keep diffs tight; avoid opportunistic refactors unless the user explicitly asks.
- Annotate complex logic with brief, meaningful comments when clarity will save future readers time.

## Validation
- Run targeted tests or linters after each significant change; prioritize fast feedback loops.
- If executing tests is impossible, explain the gap and outline how the work should be validated.
- Review the final diff yourself: double-check for typos, revert stray debugging code, and ensure documentation stays in sync.

## Communication
- Summarize findings and changes concisely, leading with risks or blockers before narrating successes.
- Reference files and line numbers precisely so users can jump straight to the relevant code.
- Offer next steps only when they provide real value, e.g., suggesting follow-up tests or deployment actions.
- Be transparent about limitations—tooling gaps, skipped steps, or assumptions should be explicit in the final response.

## Safety & Approvals
- Understand the sandbox and approval policy; request escalations only when essential and justify them in one clear sentence.
- Treat destructive commands (`rm`, `reset`, data writes outside the workspace) as last resorts and get confirmation first when policy allows.
- Never undo user-owned changes unless told to; if unexpected modifications appear, pause and ask how to proceed.

## Continuous Improvement
- Reflect after finishing a task: note what slowed you down and how to tighten the loop next time.
- Keep a mental catalog of common project patterns and pitfalls so future tasks start faster and with fewer mistakes.
- Share insights about the codebase or workflows when they can help the team, not just the current task.

## Context Intake
- Capture the full instruction stack (system → developer → user) before acting; restate ambiguities to confirm shared understanding.
- Scan recent diffs, open issues, or failing tests that may influence the task so surprises surface early.
- Record assumptions in your notes; revisit and clear them as soon as new information arrives.

## Prompt Crafting
- Mirror key nouns and verbs from the request in your internal plan so important constraints stay top-of-mind.
- Ask pointed follow-ups instead of broad ones; offer concrete options to help the user choose a path quickly.
- Share partial proposals or prototypes when commitment is unclear—iterative alignment beats silent overbuild.

## Tooling & Environment
- Prefer fast, targeted commands (`rg`, single-file tests) to keep iteration loops tight.
- Keep terminal output clean; strip ANSI noise before sharing summaries so stakeholders can parse the signal.
- Note sandbox and network constraints up front and design workarounds early if they block the happy path.

## Debugging Discipline
- Reproduce issues locally before attempting fixes; if replication fails, seek more context rather than guessing.
- Instrument code with temporary logging sparingly and remove it immediately after validation.
- Compare behaviour against known-good commits or tests to isolate regressions quickly.

## Time & Focus Management
- Slice large tasks into deliverable increments; share progress checkpoints so course corrections stay cheap.
- Automate repetitive steps (command aliases, snippets) but review automation regularly to avoid stale assumptions.
- Reserve buffer time for validation and documentation—you finish only when the hand-off is effortless.

## Architecture & Feature Delivery
- Map new work to existing architecture early; highlight seams, reuse extension points, and document any intentional deviations.
- Prefer incremental feature flags or configuration toggles so releases can ship safely while work continues behind the scenes.
- Keep acceptance criteria visible and trace commits or PRs back to them to ensure full functional coverage.
- Measure performance budgets (latency, bundle size, memory) and enforce them during development to guard against regressions.

## Security & Privacy
- Threat-model changes before coding: identify attack surfaces, data flows, and trust boundaries that the work may touch.
- Apply least-privilege defaults—scoped tokens, minimal file access, sanitized inputs/outputs, and audited dependency updates.
- Treat sensitive data carefully: avoid logging secrets, clear caches, and confirm encryption or transport requirements.
- Schedule regular dependency and vulnerability scans; create playbooks for patching or mitigating high-severity findings quickly.

## Testing Strategy
- Align automated test layers to risk: unit for logic, integration for contracts, end-to-end for critical flows, and property tests where edge-cases explode combinatorially.
- Establish fixture realism—seed data should mimic production to catch schema or locale surprises.
- Pair new features with tests that would fail without the change; ensure negative cases prove the guardrails hold.
- Track flaky tests aggressively: quarantine, triage root causes, and fix or remove to keep the signal trustworthy.

## Test Case Development Standards

### Test Planning & Design
- **Edge Case Identification**: Systematically identify and document edge cases (logged-out users, empty states, error conditions, boundary values).
- **Test Environment Setup**: Use real providers and contexts instead of mocks when possible to ensure realistic test conditions.
- **State Management**: Explicitly control initial state (clear localStorage, sessionStorage) to ensure predictable test conditions.
- **Responsive Testing**: Include tests for different viewport sizes and device-specific behaviors.

### Test Implementation Best Practices
- **Avoid Mocks When Possible**: Prefer real component rendering with actual context providers for integration-style testing.
- **Handle Multiple Elements**: Use `getAllBy*` queries when components have responsive duplicates or multiple instances.
- **Flexible Text Matching**: Use partial text matching and regex patterns for dynamic content that may change.
- **Accessibility Testing**: Include tests for alt text, ARIA roles, keyboard navigation, and screen reader compatibility.
- **Performance Assertions**: Test render times and ensure components load within acceptable thresholds.

### Test Structure Standards
```javascript
describe('Component - Specific Scenario', () => {
  beforeEach(() => {
    // Clear state for predictable conditions
    localStorage.clear()
    sessionStorage.clear()
    jest.clearAllMocks()
  })

  describe('Feature Group', () => {
    it('should describe expected behavior in specific condition', async () => {
      // Arrange: Setup test environment
      renderWithProviders(<Component />)

      // Act: Wait for component to stabilize
      await waitFor(() => {
        expect(screen.getByText('key-element')).toBeInTheDocument()
      })

      // Assert: Verify expected behavior
      expect(screen.getByRole('button')).toHaveAttribute('href', '/expected-path')
    })
  })
})
```

### Test Coverage Requirements
- **Initial Load State**: Verify component renders correctly in target scenario.
- **Interactive Elements**: Test all clickable elements, form inputs, and user interactions.
- **Navigation**: Verify all links have correct href attributes and are accessible.
- **Content Sections**: Test each major section of the component independently.
- **Responsive Behavior**: Test mobile, tablet, and desktop layouts.
- **Accessibility**: Test screen reader compatibility and keyboard navigation.
- **Performance**: Ensure render times are within acceptable limits.
- **Error Handling**: Test component behavior when data is missing or invalid.

### Common Test Patterns
- **Multiple Element Handling**: `screen.getAllByRole('link', { name: /pattern/i })[0]` for responsive duplicates.
- **Flexible Text Matching**: `screen.getByText((content) => content.includes('partial-text'))` for dynamic content.
- **User Interaction Testing**: Use `userEvent.setup()` for realistic user interactions.
- **Async Content**: Always use `waitFor()` for content that loads asynchronously.
- **Context Testing**: Wrap components with necessary providers using custom render functions.

### Test Maintenance
- **Descriptive Test Names**: Use clear, behavior-focused test descriptions that explain the scenario and expected outcome.
- **Grouped Assertions**: Group related tests in describe blocks by feature or user flow.
- **Test Data Management**: Use realistic test data that mirrors production scenarios.
- **Regular Review**: Periodically review tests for flakiness, outdated assertions, and missing coverage.
- **Documentation**: Document complex test scenarios and edge cases for future reference.

### Edge Case Testing Methodology
- **Authentication States**: Test logged-in, logged-out, expired sessions, and permission levels.
- **Data States**: Test empty data, loading states, error states, and boundary conditions.
- **Network Conditions**: Test offline scenarios, slow connections, and API failures.
- **Device Variations**: Test different screen sizes, touch vs mouse interactions, and browser capabilities.
- **User Scenarios**: Test first-time users, returning users, and users with different preferences.

### Test Quality Metrics
- **Coverage Goals**: Aim for 80%+ line coverage, 90%+ branch coverage for critical paths.
- **Performance Benchmarks**: Components should render in <1000ms, interactions should respond in <100ms.
- **Accessibility Standards**: All interactive elements must be keyboard accessible and screen reader compatible.
- **Cross-Browser Compatibility**: Test core functionality across major browsers and versions.
- **Flakiness Tolerance**: Tests should pass consistently; investigate any test with >5% failure rate.

## QA & QC Collaboration
- Share early builds or feature flags so QA can design exploratory charters before the code freezes.
- Capture reproduction steps, test data, and expected outcomes in tickets to make verification repeatable.
- Close the loop on defects with root-cause notes and prevention steps; update checklists or templates to stop repeats.
- Maintain dashboards for defect density, escape rate, and mean time to resolution to steer quality investments.

## Release & Monitoring
- Automate build pipelines with linting, tests, security scans, and artifact signing as mandatory gates.
- Document rollback procedures and feature-flag kill switches so outages can be mitigated fast.
- Instrument new code with metrics, structured logs, and alerts tied to user-facing SLIs/SLOs.
- After deployment, review monitoring data and user feedback within the first release window to catch regressions early.
