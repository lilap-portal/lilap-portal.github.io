// Lilla P B2B Portal — UX Audit report data.
//
// Content drawn from /ux-audit-log and /data/phases.js (the working case
// log and its "promoted" HTML-report version). This file re-packages the
// same real findings from all 8 completed cases into the structure this
// standalone report's app.js renders, styled after the visual system of
// a prior, unrelated audit (motivarcare.github.io) per Gaston's request —
// only the design language was borrowed, not any of its content.
//
// Severity tiers (High / Medium / Low) are a coarse bucketing of each
// finding's own free-text "Priority note" (e.g. "Medium-High" buckets to
// High, "Low-Medium" buckets to Low) — the original priority text is kept
// verbatim in `priorityNote` on every finding.

import img_login_screen_review_01_login_initial_state from "./assets/ux-audit/login-screen-review/01-login-initial-state.jpg";
import img_login_screen_review_02_empty_submit_no_feedback from "./assets/ux-audit/login-screen-review/02-empty-submit-no-feedback.jpg";
import img_login_screen_review_03_invalid_email_redirected_to_signup_request from "./assets/ux-audit/login-screen-review/03-invalid-email-redirected-to-signup-request.jpg";
import img_landing_page_default_report_03_nonsense_search_no_results_state from "./assets/ux-audit/landing-page-default-report/03-nonsense-search-no-results-state.jpg";
import img_landing_page_default_report_04_tie_search_phantom_no_results_bug from "./assets/ux-audit/landing-page-default-report/04-tie-search-phantom-no-results-bug.jpg";
import img_navigation_structure_03_select_customer_modal_on_my_account from "./assets/ux-audit/navigation-structure/03-select-customer-modal-on-my-account.jpg";
import img_navigation_structure_04_my_account_sales_orders_for_selected_customer from "./assets/ux-audit/navigation-structure/04-my-account-sales-orders-for-selected-customer.jpg";
import img_navigation_structure_09_my_account_stale_customer_data_after_switch from "./assets/ux-audit/navigation-structure/09-my-account-stale-customer-data-after-switch.jpg";
import img_navigation_structure_10_my_account_correct_data_after_reload from "./assets/ux-audit/navigation-structure/10-my-account-correct-data-after-reload.jpg";
import img_navigation_structure_08_recent_customers_loading_spinner from "./assets/ux-audit/navigation-structure/08-recent-customers-loading-spinner.jpg";
import img_navigation_structure_06_user_menu_open_generic_avatar_icon from "./assets/ux-audit/navigation-structure/06-user-menu-open-generic-avatar-icon.jpg";
import img_navigation_structure_07_user_menu_closed_alan_jalife_text_desktop from "./assets/ux-audit/navigation-structure/07-user-menu-closed-alan-jalife-text-desktop.jpg";
import img_navigation_structure_13_user_drawer_open_recent_customers from "./assets/ux-audit/navigation-structure/13-user-drawer-open-recent-customers.jpg";
import img_navigation_structure_12_linesheets_expanded_season_list_unreachable from "./assets/ux-audit/navigation-structure/12-linesheets-expanded-season-list-unreachable.jpg";
import img_navigation_structure_11_administration_manage_users_keyboard_focus from "./assets/ux-audit/navigation-structure/11-administration-manage-users-keyboard-focus.jpg";
import img_navigation_structure_14_user_drawer_log_out_focused from "./assets/ux-audit/navigation-structure/14-user-drawer-log-out-focused.jpg";
import img_navigation_structure_15_focus_leaked_behind_open_drawer from "./assets/ux-audit/navigation-structure/15-focus-leaked-behind-open-drawer.jpg";
import img_manage_users_04_manage_users_order_entry_access_checkbox_ambiguous from "./assets/ux-audit/manage-users/04-manage-users-order-entry-access-checkbox-ambiguous.jpg";
import img_manage_users_03_manage_users_actions_modal_loading_spinner from "./assets/ux-audit/manage-users/03-manage-users-actions-modal-loading-spinner.jpg";
import img_manage_users_01_manage_users_list_default_state from "./assets/ux-audit/manage-users/01-manage-users-list-default-state.jpg";
import img_manage_users_02_manage_users_employee_sales_rep_search_results from "./assets/ux-audit/manage-users/02-manage-users-employee-sales-rep-search-results.jpg";
import img_manage_reports_02_manage_reports_actions_dropdown_menu from "./assets/ux-audit/manage-reports/02-manage-reports-actions-dropdown-menu.jpg";
import img_manage_reports_05_manage_reports_price_audit_checkboxes_ambiguous from "./assets/ux-audit/manage-reports/05-manage-reports-price-audit-checkboxes-ambiguous.jpg";
import img_manage_reports_06_manage_reports_price_audit_single_checkbox_state from "./assets/ux-audit/manage-reports/06-manage-reports-price-audit-single-checkbox-state.jpg";
import img_manage_reports_07_manage_reports_sharing_options_modal from "./assets/ux-audit/manage-reports/07-manage-reports-sharing-options-modal.jpg";
import img_manage_reports_01_manage_reports_list_default_state from "./assets/ux-audit/manage-reports/01-manage-reports-list-default-state.jpg";
import img_style_cards_01_style_cards_standard_view_default from "./assets/ux-audit/style-cards/01-style-cards-standard-view-default.jpg";
import img_add_to_cart_01_drawer_black_quantity_exceeds_availability_error from "./assets/ux-audit/add-to-cart/01-drawer-black-quantity-exceeds-availability-error.jpg";
import img_add_to_cart_08_color_swatches_plain_divs_not_focusable from "./assets/ux-audit/add-to-cart/08-color-swatches-plain-divs-not-focusable.png";
import img_add_to_cart_07_add_to_cart_button_no_visible_focus_indicator from "./assets/ux-audit/add-to-cart/07-add-to-cart-button-no-visible-focus-indicator.png";
import img_add_to_cart_06_drawer_close_button_visible_focus_ring from "./assets/ux-audit/add-to-cart/06-drawer-close-button-visible-focus-ring.png";
import img_cart_editing_order_placement_07_move_to_delivery_blocked_30_day_window from "./assets/ux-audit/cart-editing-order-placement/07-move-to-delivery-blocked-30-day-window.jpg";
import img_cart_editing_order_placement_11_duplicate_creates_second_delivery_line from "./assets/ux-audit/cart-editing-order-placement/11-duplicate-creates-second-delivery-line.jpg";
import img_cart_editing_order_placement_12_duplicate_blocks_checkout_hidden_tooltip from "./assets/ux-audit/cart-editing-order-placement/12-duplicate-blocks-checkout-hidden-tooltip.jpg";

export const CASES = [
  // ---------------------------------------------------------------------
  {
    n: "01",
    title: "Login screen: cross-area review",
    screenTag: "Pre-authentication",
    statusBadges: ["Completed"],
    description:
      "Targeted heuristic evaluation, cognitive walkthrough, and a responsive/accessibility spot check applied together to a single screen: /login (the “Log in / Register” email-first screen) and where it leads, /signuprequest (“Complete your registration”). No login was completed and no account was accessed — this session had no test credentials for the portal, so testing was limited to the pre-authentication screen itself: submitting it empty, submitting a malformed string, submitting a valid-format but unregistered email, keyboard-only navigation, and a responsive check at tablet (768×1024) and mobile (375×812) widths. No real signup request was submitted, to avoid creating one in Lilla P's system.",
    steps: [
      "Opened the /login screen: a single Email field and a “Continue” button, plus a “Continue with Google” option.",
      "Clicked “Continue” with the Email field empty. Nothing happened: no inline error, no field highlight, no message near the button — and a check of network activity confirmed no request is even sent.",
      "Typed a string with no “@” and no domain (“notanemail”) and clicked “Continue”. The button showed a loading spinner for a few seconds with no status text, then redirected to /signuprequest (“Complete your registration”) with that same malformed string carried over into a disabled Email field.",
      "Retested the same empty-submit and invalid-email behavior at a 768×1024 tablet viewport: both /login and /signuprequest render cleanly, with no clipping or overlapping fields, and gave identical results to desktop.",
      "Checked the 375×812 mobile layout: renders with the same clean, centered, non-clipped layout as tablet/desktop, though interactive re-testing of the submit behaviors specifically could not be completed at this width in this session (see Notes).",
      "Traced keyboard-only navigation: Tab correctly reaches “Continue”, and Enter submits the form from the Email field.",
    ],
    findings: [
      {
        n: 1,
        title: "Submitting the form empty gives no feedback at all",
        severity: "Medium",
        priorityNote:
          "Medium — a silent dead end on the very first interaction available on this screen; it doesn't block a user who enters a valid email, but a user who clicks too early is given nothing to act on.",
        heuristic: "Error prevention · Visibility of system status",
        category: "User Control & Errors",
        viewport: "Desktop, Tablet",
        body: [
          "Clicking “Continue” with the Email field empty produces no visible change: no inline error, no field highlight, no message near the button. A check of network activity confirmed no request is even sent — the click is a complete no-op. A user who clicks Continue too early (a very likely first interaction on this screen) has no way to know why nothing happened.",
        ],
        recommendation:
          "Either disable “Continue” until the field has a plausible value, or show an inline “Enter your email to continue” message on click.",
        images: [
          { src: img_login_screen_review_01_login_initial_state, caption: "Login screen, initial state" },
          { src: img_login_screen_review_02_empty_submit_no_feedback, caption: "Empty submit — no feedback of any kind" },
        ],
      },
      {
        n: 2,
        title: "No email-format validation before submitting",
        severity: "High",
        priorityNote:
          "Medium-High — a simple typo is carried, unvalidated and uncorrectable, straight into a registration-request flow, which both strands the user and risks generating junk signup requests with malformed emails baked in.",
        heuristic: "Error prevention · Recognition, diagnosis, and recovery from errors",
        category: "User Control & Errors",
        viewport: "Desktop, Tablet",
        body: [
          "Typing a string with no “@” and no domain (“notanemail”) is accepted by the form exactly like a real email: the button shows a loading state for several seconds, then the app redirects to /signuprequest (“Complete your registration”) with that same malformed string carried over verbatim into the (disabled/pre-filled) Email field of the registration form.",
          "There is no client-side check that the input even looks like an email before the app commits to a multi-second round trip and lands the user on an unrelated, longer form. A user who mistypes their email is not told their input was invalid — they're dropped into a “request access” flow with a broken email address baked into a field they can't edit.",
        ],
        recommendation:
          "Validate email format client-side before submitting, with an inline message, before ever reaching the “not found” / registration-request path.",
        images: [
          { src: img_login_screen_review_03_invalid_email_redirected_to_signup_request, caption: "Invalid email redirected straight to “Complete your registration”" },
        ],
      },
      {
        n: 3,
        title: "The wait before redirecting has no status message",
        severity: "Low",
        priorityNote:
          "Low — the wait is short and always resolves correctly on its own; this is a missing status cue, not a stuck or broken state.",
        heuristic: "Visibility of system status",
        category: "Visibility & Status",
        viewport: "Desktop, Tablet",
        body: [
          "Between clicking “Continue” and landing on either the next login step or /signuprequest, the button shows a spinner for roughly 2–3 seconds with no accompanying text. Nothing tells the user what's happening (“Checking your email…” or similar), so a slower response could easily read as the screen being stuck rather than working.",
        ],
        recommendation: "A short status label alongside the spinner would close this gap cheaply.",
        images: [],
      },
    ],
    positives: [
      "The screen is minimal and focused: one field, one primary action for the first step, which keeps the initial decision simple.",
      "The Email field shows a clear, reasonably high-contrast focus outline when tabbed into.",
      "Full keyboard navigation works correctly: Tab reaches “Continue” and Enter submits the form from the Email field.",
      "The “email not found → request access” pattern itself is a coherent, intentional design for a B2B portal without open self-signup, since it behaved identically and predictably for both a malformed string and a valid-format but unregistered email.",
      "Tablet (768×1024), fully verified: both /login and /signuprequest render cleanly, and repeating the empty-submit and invalid-email tests gave identical results to desktop — no tablet-specific regression.",
      "Mobile (375×812), layout confirmed clean: the same centered, non-clipped layout as tablet/desktop, with no responsive breakage visible.",
    ],
    notes: [
      "This case could not be extended past the email step: this session had no test credentials for the portal, so the password step and the authenticated app were not reached.",
      "Interactive testing at the mobile (375px) width specifically could not be completed in this session due to a tooling limitation with touch-emulated input at that viewport, so the invalid-email and empty-submit behaviors were visually inferred at that width rather than directly re-confirmed.",
      "Worth a later check: does the same “no format validation” gap (Finding 2) exist on the registration form itself — not tested here, to avoid submitting a real request to Lilla P's customer service team.",
      "Assessment boundary: Area 3 (responsive/accessibility) is substantially complete for this screen. The remaining gap is Area 2 — this case doesn't extend past the email step, pending test credentials to continue the walkthrough into the authenticated app.",
    ],
  },

  // ---------------------------------------------------------------------
  {
    n: "02",
    title: "Application landing page / Default report (Fall 2026)",
    screenTag: "Post-login landing",
    statusBadges: ["Completed"],
    description:
      "Cognitive walkthrough of the post-login landing flow, plus a targeted heuristic evaluation of the search, header, and left-navigation controls on the same screen — /reports/linesheets?report_id=3771 (Fall 2026), which auto-executes and lands every user here immediately after login. Desktop pass used the user's own real, already-authenticated Chrome session; tablet (768×1024) and mobile (375×812) were added in a later follow-up using viewport emulation on the same authenticated environment.",
    steps: [
      "Refreshed the Fall 2026 report and confirmed it re-executes cleanly, with a clear loading state.",
      "Scrolled the full report end to end, and inspected a product card's own per-item favorite star on hover.",
      "Searched a nonsense string to confirm the report correctly shows no real matches, then ran a clean search for “Tie”: the real match appeared correctly, but a “No results found in this report.” block also rendered directly beneath it.",
      "Repeated with “Knit”: same real-match-plus-phantom-message pattern. Cleared the search box and confirmed the original report was fully restored.",
      "Retested at 768×1024 tablet width: same clean loading and scroll behavior, and Findings 1 and 2 reproduce identically. Switched between the three “View” buttons and found no visible difference at this width.",
      "Retested at 375×812 mobile width jointly with the UX Assessment Lead: report loads cleanly, per-item icons show persistently, and the header's controls collapse into a “…” overflow menu, which surfaced a duplicated “Show Favorites” row.",
    ],
    findings: [
      {
        n: 1,
        title: "A “No results found” message always renders after search results, even when real matches are shown above it",
        severity: "High",
        priorityNote:
          "High — a reproducible, self-contradicting message on the app's single highest-traffic screen, on its single most common action (search), directly undermining trust in a genuine result the user is looking straight at.",
        heuristic: "Visibility of system status · Error prevention",
        category: "Visibility & Status",
        viewport: "Desktop, Tablet, Mobile",
        body: [
          "Searching “Tie” correctly filters the report down to matching products, but directly below those real, correct results, the UI also renders a “No results found in this report.” block — on the same results list, at the same time as genuine matches. This isn't limited to edge cases: a clean, single search reproduces it immediately, so it isn't leftover state from a previous search.",
          "A user performing the single most common action on this screen — searching within the current season's report — is shown a message telling them their search found nothing, directly underneath the results proving that it did.",
        ],
        recommendation:
          "The “No results found in this report.” block should only render when the results list is actually empty — this reads as a conditional check that's missing or inverted somewhere in the search-results rendering logic.",
        images: [
          { src: img_landing_page_default_report_03_nonsense_search_no_results_state, caption: "Nonsense-string search — correct no-results state" },
          { src: img_landing_page_default_report_04_tie_search_phantom_no_results_bug, caption: "“Tie” search: real result shown alongside a phantom “No results found” block" },
        ],
      },
      {
        n: 2,
        title: "The same icon glyph is reused for different, sometimes conflicting actions across the screen",
        severity: "Medium",
        priorityNote:
          "Medium — each control behaves correctly and predictably once its meaning is known, but the same star and X glyphs mapping to different actions on one screen risks a misclick on an action that affects every visible item at once.",
        heuristic: "Consistency and standards · Match between system and the real world",
        category: "Design System",
        viewport: "Desktop",
        body: [
          "The header star icon triggers “Select All”, not “favorite” — yet each individual product card has its own, separate, genuine per-item favorite star, using the identical glyph for a different action. The header X icon triggers “Unselect All”, while the same X glyph, in the opposite corner of the header, is also the control used to collapse the left navigation panel.",
          "None of these three controls is broken — each does what it does, consistently, once you know what it does — but taken together this points to the app not yet having a settled, consistent icon vocabulary.",
        ],
        recommendation:
          "Define a small, consistent icon vocabulary: reserve the star exclusively for favoriting, use a distinct glyph for bulk selection, and use a chevron or arrow — not X/hamburger — for a persistent panel's collapse/expand control.",
        images: [],
      },
      {
        n: 3,
        title: "At tablet width, the three “View” buttons no longer look different",
        severity: "Medium",
        priorityNote:
          "Medium — the underlying content is still fully reachable via each card's own expand caret, but a control that visibly does nothing at this width is more confusing than one that's hidden or disabled.",
        heuristic: "Visibility of system status · Consistency and standards",
        category: "Visibility & Status",
        viewport: "Tablet",
        body: [
          "On desktop, the “View” toggle switches between three genuinely different layouts. At tablet width (768px), switching between all three buttons produces the exact same layout: a single-column card per product, with color/size quantities only available by tapping that card's own expand caret.",
          "The single-column layout is clean and usable on its own, but the control itself stops doing anything — confusing for a Sales Rep who deliberately picks “Extended list view” expecting the desktop behavior.",
        ],
        recommendation:
          "Either give “View” its own responsive treatment at tablet width, or hide/disable the toggle at widths where it has no effect.",
        images: [],
      },
      {
        n: 4,
        title: "The mobile “…” menu shows “Show Favorites” twice",
        severity: "Low",
        priorityNote:
          "Low — both rows stay in sync and the feature works correctly either way; this is a markup/visual cleanup, not a functional defect (the same pattern recurs, and is rated the same way, on Case 06).",
        heuristic: "Consistency and standards · Aesthetic and minimalist design",
        category: "Design System",
        viewport: "Mobile",
        body: [
          "At mobile width, the header's controls move into a “…” overflow menu. Opening it shows two separate “Show Favorites” toggle rows, one directly below the other, before Select all / Unselect all / Edit this report. Both toggles do control the same thing, so this isn't a broken control, just a duplicated one — most likely the app renders both a mobile and a desktop version of this menu's contents into the same panel at this width.",
        ],
        recommendation: "Remove the duplicate row — only one “Show Favorites” toggle should render inside the “…” menu at this width.",
        images: [],
      },
    ],
    positives: [
      "Refreshing the page correctly re-executes the report and refreshes its contents, with a clear loading state in between.",
      "The full report can be scrolled and traversed end to end with no dead zones or broken lazy-loading; the breadcrumb tracks scroll position live.",
      "Search works correctly at the data level: a nonsense string correctly returns no real matches, and clearing the search box correctly and fully restores the original report — Finding 1 is a display defect layered on top of search, not a defect in the search/filter logic itself.",
      "All three “View” buttons work correctly with no bugs on desktop.",
      "Tablet (768×1024) matches desktop almost exactly, and collapsing the left navigation panel correctly reflows the report from one column to two.",
      "Mobile (375×812) adapts sensibly: the breadcrumb abbreviates to fit, per-item icons show persistently, and the “Select All” confirmation dialog renders correctly with no clipping.",
    ],
    notes: [
      "This case is closed across all three target viewports. Findings 1 and 2 reproduce identically at every width tested; Findings 3 and 4 are specific to tablet and mobile respectively.",
      "The mobile pass was run jointly with the UX Assessment Lead: a tooling limitation prevented direct taps at 375px in this session's browser, so the UX Assessment Lead performed each tap and shared the result for inspection.",
      "The mobile “…” menu also surfaced an “Edit this report” screen not previously noted in this case — out of scope here, not tested to avoid modifying real report data; worth a dedicated case of its own.",
      "Worth checking later: does the same phantom “No results found” block appear on other reports, or is it specific to this report/template?",
    ],
  },

  // ---------------------------------------------------------------------
  {
    n: "03",
    title: "Navigation structure: left panel & user menu",
    screenTag: "App-wide navigation",
    statusBadges: ["Completed"],
    description:
      "Targeted heuristic evaluation of the left navigation panel and the top-right user menu, present on every authenticated screen — evaluated from the Fall 2026 report and the Administration and MY ACCOUNT pages it links to. Original pass confirmed consistent across desktop, tablet, and mobile; a later keyboard-only follow-up (Findings 6–8) was desktop-only. No user, report, or asset was modified; every customer selected during testing was deselected afterward.",
    steps: [
      "Opened the left panel's seven sections (LINESHEETS, CUSTOM LINESHEETS, REPORTS, SAVE/SHARE/PRINT, MY ACCOUNT, SETTINGS, ADMINISTRATION) one at a time, confirming it's a single-open accordion.",
      "Clicked MY ACCOUNT's “Open orders” with no customer selected: a “SELECT CUSTOMER” modal appeared. Selected a customer and reopened it: loaded that customer's real sales orders under a “my-account” label and URL.",
      "Opened ADMINISTRATION's three items (Manage users, Manage reports, Manage assets) and the top-right user menu (“Alan Jalife”): a right-side drawer with a customer search box, “Recent customers”, and “Log out”.",
      "Retested the full panel and user menu at 768×1024: identical structure and behavior to desktop, with collapse/reopen correctly reflowing the report from one column to two.",
      "Retested at 375×812 jointly with the UX Assessment Lead: the left panel opens as a full-screen overlay instead of a sidebar, with the same seven sections; MY ACCOUNT and ADMINISTRATION both reproduce cleanly.",
      "Follow-up: selected a customer via the search box (not just Recent customers), then switched between customers repeatedly while checking MY ACCOUNT's Open Orders each time against a fresh page reload used as ground truth.",
      "Follow-up: traced the first 20 Tab stops from a fresh page load using genuine key presses (Tab, Enter, Escape), reading document.activeElement after each one, through the left panel, then into the user menu.",
    ],
    findings: [
      {
        n: 1,
        title: "“MY ACCOUNT” is misleadingly named: it's the selected customer's account, not the Sales Rep's own",
        severity: "Medium",
        priorityNote:
          "Medium — unlike Finding 2, no data is ever wrong here, but a section name that reads as “my own account” when it's actually whichever customer is currently selected is a real mismatch for a Sales Rep managing dozens of accounts.",
        heuristic: "Match between system and the real world · Consistency and standards",
        category: "Design System",
        viewport: "Desktop, Tablet, Mobile",
        body: [
          "Every item under “MY ACCOUNT” requires a customer to be selected first, and once one is, all seven show that customer's data, not anything belonging to the logged-in Sales Rep. Clicking “Open orders” with no customer selected surfaces a “Customer must be selected for this action” modal; after selecting a customer, the same link loads that customer's sales orders at a URL that literally reads /my-account/orders.",
          "For a Sales Rep acting on behalf of dozens of buyer accounts, a section labeled “MY ACCOUNT” reads as “my own account” — the natural first guess — when it's actually “the account of whichever customer I currently have selected”.",
        ],
        recommendation:
          "Rename the section to something that names the customer, not the rep — e.g. “Customer Account” — or show the selected customer's name in the section header.",
        images: [
          { src: img_navigation_structure_03_select_customer_modal_on_my_account, caption: "“SELECT CUSTOMER” modal on MY ACCOUNT" },
          { src: img_navigation_structure_04_my_account_sales_orders_for_selected_customer, caption: "MY ACCOUNT sales orders for the selected customer" },
        ],
      },
      {
        n: 2,
        title: "Switching customers can leave MY ACCOUNT showing the previous customer's address and orders under the new customer's name",
        severity: "High",
        priorityNote:
          "High — unlike this case's other findings, this one can show a Sales Rep incorrect, specific business data mislabeled as belonging to the wrong customer, with nothing on screen to flag it as stale.",
        heuristic: "Visibility of system status · Match between system and the real world",
        category: "Visibility & Status",
        viewport: "Desktop",
        body: [
          "After a customer is already selected, switching to a different one does not reliably refresh MY ACCOUNT screens like Open Orders. The heading and the top-right chip both update immediately, but the address and order list underneath can keep showing the previous customer's real data for longer — in some cases indefinitely without a manual page reload.",
          "Reproduced three times in a row: every time, the street address stayed on the previous customer's real address for at least a couple of seconds, and twice never self-corrected. Once, the order list itself carried over — real order numbers, dates, and dollar totals — mislabeled under the newly selected customer's name. A fresh reload always shows the correct data.",
        ],
        recommendation:
          "Make the customer switch a single atomic operation from the user's point of view — don't update the heading/chip until the new customer's data has actually loaded, and show an explicit loading state in the meantime.",
        images: [
          { src: img_navigation_structure_09_my_account_stale_customer_data_after_switch, caption: "MY ACCOUNT heading updated, but the previous customer's stale address and orders" },
          { src: img_navigation_structure_10_my_account_correct_data_after_reload, caption: "Same account, correct, immediately after a reload" },
        ],
      },
      {
        n: 3,
        title: "“Recent customers” does show a loading spinner, but it's positioned and styled in a way that makes it easy to miss",
        severity: "Low",
        priorityNote:
          "Low, per the UX Assessment Lead — a loading indicator does exist, the delay it covers is short, and nothing about it is broken, only easy to miss.",
        heuristic: "Visibility of system status",
        category: "Visibility & Status",
        viewport: "Desktop, Tablet, Mobile",
        body: [
          "Opening the user menu shows “Recent customers” right away, but the list can take a few seconds to populate. There is a loading spinner, but it renders centered in the full page viewport — not near the list itself — over the dark overlay that dims the rest of the page, in a similarly dark gray tone, so it blends into the background rather than reading as an active loading state.",
        ],
        recommendation:
          "Move the loading indicator into the “Recent customers” list area itself, with enough contrast against the dimmed overlay to actually be seen.",
        images: [
          { src: img_navigation_structure_08_recent_customers_loading_spinner, caption: "Recent customers — low-contrast, viewport-centered loading spinner" },
        ],
      },
      {
        n: 4,
        title: "The account/user control changes its own visual identity between closed and open states",
        severity: "Low",
        priorityNote:
          "Low. Nothing here blocks or misleads a user about what to do next — it's a minor visual inconsistency on a control most people glance at rather than study.",
        heuristic: "Consistency and standards",
        category: "Design System",
        viewport: "Desktop, Tablet, Mobile",
        body: [
          "The top-right user control renders as three different things depending on state and viewport: desktop/panel closed shows plain text with a chevron and no icon; tablet/mobile closed shows a circular avatar with initials; all three viewports, panel open, replace either with a generic person-silhouette icon unrelated to either. Since this is the same control before and after the same click, a user has no visual thread connecting the two states.",
        ],
        recommendation:
          "Pick one representation for the current user — the avatar-with-initials pattern — and use it consistently whether the panel is open or closed, at every viewport.",
        images: [
          { src: img_navigation_structure_06_user_menu_open_generic_avatar_icon, caption: "Panel open — generic person-silhouette icon" },
          { src: img_navigation_structure_07_user_menu_closed_alan_jalife_text_desktop, caption: "Panel closed, desktop — plain text, no icon" },
        ],
      },
      {
        n: 5,
        title: "The user drawer's close control sits at the opposite corner from where it was opened, and doesn't double as a toggle",
        severity: "Low",
        priorityNote: "Low. The backdrop-click fallback means no one gets stuck; this is a minor efficiency and consistency gap, not a blocker.",
        heuristic: "Consistency and standards · User control and freedom",
        category: "User Control & Errors",
        viewport: "Desktop, Tablet, Mobile",
        body: [
          "The drawer opens from the top-right of the screen, but its own “X” close control sits at the drawer's opposite, inner edge — away from the trigger that opened it. This breaks symmetry with the left navigation panel, whose own collapse control sits at its outer edge, where it visually lives.",
          "Clicking the avatar/trigger a second time while the drawer is open does not close it. Clicking the dimmed backdrop does close it correctly, so a working fallback exists — this isn't a dead end, just a less direct path than expected.",
        ],
        recommendation:
          "Move the drawer's close control to its own outer edge (top-right), and/or make the trigger itself toggle the drawer closed on a second click.",
        images: [
          { src: img_navigation_structure_13_user_drawer_open_recent_customers, caption: "User drawer open — close control at the inner edge" },
        ],
      },
      {
        n: 6,
        title: "A keyboard-only user can never change which season/lineheet is being viewed",
        severity: "High",
        priorityNote:
          "High — this is a genuine, reproducible dead end for a core task, not just added friction, and it affects the one section that's open on every fresh page load.",
        heuristic: "User control and freedom · Accessibility (WCAG 2.1.1 Keyboard)",
        category: "Accessibility",
        viewport: "Desktop",
        body: [
          "The left panel's seven accordion buttons are, on their own, fully keyboard-operable — reachable via Tab, correct aria attributes, visible focus, correct Enter activation. But whether a section's contents are reachable once expanded depends entirely on which section it is, and LINESHEETS — open by default — is one that fails: its four items have no tabindex, role, or href, so tabbing from the LINESHEETS button skips straight past all four.",
          "This isn't a blanket failure of the accordion pattern: ADMINISTRATION's own three items use tabindex=\"0\" on the same kind of row, are genuinely reachable via Tab, and activate correctly on Enter — the fix pattern already exists elsewhere in this same panel.",
        ],
        recommendation:
          "Add tabindex=\"0\" (and a role such as option/menuitem, with an Enter/Space handler) to each item inside LINESHEETS' season list, matching the pattern ADMINISTRATION already uses.",
        images: [
          { src: img_navigation_structure_12_linesheets_expanded_season_list_unreachable, caption: "LINESHEETS expanded — its four items are visible but unreachable by Tab" },
          { src: img_navigation_structure_11_administration_manage_users_keyboard_focus, caption: "Contrast: ADMINISTRATION's own items ARE reachable via Tab" },
        ],
      },
      {
        n: 7,
        title: "Opening the user menu doesn't move focus into it, and reaching its own controls means tabbing through the page behind it first",
        severity: "Medium",
        priorityNote:
          "Medium — a real, confirmed friction and focus-order problem, but a patient keyboard user can still eventually reach the drawer's own controls by continuing to tab forward.",
        heuristic: "Visibility of system status · Accessibility (WCAG 2.4.3 Focus Order)",
        category: "Accessibility",
        viewport: "Desktop",
        body: [
          "Pressing Enter on the “Alan Jalife” trigger opens the drawer correctly, but leaves focus exactly where it was, on the trigger button — it does not move into the drawer's own content. Continuing the trace, 15 Tab presses from the trigger pass through the rest of the header and the whole left panel before finally reaching the drawer's own close button, and only then its search box.",
          "The trigger button also carries no aria-expanded or aria-haspopup attribute, so a screen reader gives no indication in advance that activating it opens anything at all.",
        ],
        recommendation:
          "When the drawer opens, move focus to its first focusable element rather than leaving it on the trigger. Add aria-expanded and aria-haspopup=\"dialog\" to the trigger.",
        images: [
          { src: img_navigation_structure_14_user_drawer_log_out_focused, caption: "Last reachable stop inside the open drawer, after tabbing through the rest of the page first" },
        ],
      },
      {
        n: 8,
        title: "Inside the open user menu, no customer can actually be selected by keyboard, and the panel has no focus trap or Escape support",
        severity: "High",
        priorityNote:
          "High — combined with Finding 6, this means a keyboard-only user has no way to change either of the two things this app's whole navigation model revolves around.",
        heuristic: "User control and freedom · Accessibility (WCAG 2.1.1, 2.1.2, 2.4.3, 4.1.2)",
        category: "Accessibility",
        viewport: "Desktop",
        body: [
          "None of the “Recent customers” rows are individually focusable — tabbing skips every customer name and lands directly on “Log out”. The “Search by name” box works correctly as a text input, but pressing Tab from it skips its own filtered results entirely and lands on the page's <body> element.",
          "A keyboard-only Sales Rep cannot select a different customer from this panel by any path. Pressing Escape has no effect. Continuing to Tab forward past “Log out” moves focus out of the drawer entirely and into the product grid behind it, confirmed via a screenshot showing the drawer still visibly open while a control behind it carries the visible focus ring — the drawer has no focus trap.",
        ],
        recommendation:
          "Give each customer row a tabindex=\"0\" and a real interactive role. Mark the drawer role=\"dialog\" and aria-modal=\"true\", trap Tab/Shift+Tab within it, and wire Escape to close it.",
        images: [
          { src: img_navigation_structure_15_focus_leaked_behind_open_drawer, caption: "Drawer still open, focus already leaked to the page behind it" },
        ],
      },
    ],
    positives: [
      "The left panel's seven sections are a clean, predictable single-open accordion, with no stuck or double-open states.",
      "ADMINISTRATION cleanly separates Lilla P's back-office functions from any single customer's data.",
      "The “Search by name” box in the user menu works correctly and searches the full customer base, matching substrings anywhere in a name, and shows each result's city/state to help disambiguate.",
      "The underlying customer data itself is correct in every case checked — a fresh page reload after selecting any customer always shows that customer's own correct address and orders.",
      "Tablet (768×1024), fully verified: the left panel, MY ACCOUNT modal, ADMINISTRATION, and the user menu all reproduce desktop's behavior exactly.",
      "Mobile (375×812), fully verified via joint testing: the left panel opens as a full-screen overlay — a sensible, deliberate adaptation — but surfaces the same seven sections in the same order.",
      "Keyboard navigation (desktop): the left panel's seven accordion headers are a genuinely well-built keyboard pattern, and ADMINISTRATION's three sub-items prove the fully-accessible version of this list pattern already exists in the app.",
    ],
    notes: [
      "Findings 4 and 5 both came from questions the UX Assessment Lead raised after reviewing screenshots — things the original pass had walked past without registering as inconsistencies.",
      "Finding 2 was reproduced 3 times and appears highly reliable, but the exact trigger condition wasn't isolated — worth a developer's read on the actual refetch logic behind a customer switch.",
      "Correction incorporated above: an earlier draft treated a missing “edit my own profile” screen as a navigation gap. It isn't — self-service profile editing isn't part of this app's scope; user data comes from NetSuite.",
      "The keyboard-navigation follow-up (Findings 6–8) was desktop only, requested separately once the audit noticed keyboard operability hadn't been directly tested; tablet/mobile keyboard behavior is out of scope and untested.",
      "Not investigated further: an unrelated product quick-view panel left its own header buttons in the page's Tab order, positioned far outside the visible viewport after being closed — the same underlying gap as Finding 8, worth a dedicated look in a future case.",
    ],
  },

  // ---------------------------------------------------------------------
  {
    n: "04",
    title: "Administration: Manage Users (list & row Actions)",
    screenTag: "Admin · Desktop only",
    statusBadges: ["Completed", "No responsive treatment"],
    description:
      "Targeted heuristic evaluation of ADMINISTRATION → Manage Users (/administration/manage-users): the list itself (scrolling, search), and the per-row “Actions” control — plus an explicit cross-screen consistency check against Case 05 (Manage Reports), since both live under the same ADMINISTRATION section. Desktop only, by design: per the UX Assessment Lead, this screen was never built with a responsive/mobile treatment. Tested using the user's own real, already-authenticated Chrome session; CANCEL was used after every check, never SAVE, so no account data was changed.",
    steps: [
      "Opened Manage Users: a single, un-paginated table (EMAIL, USER TYPE, COMPANY, IS B2B ADMIN, INACTIVE, NS ACCESS, STATUS, ACTIONS) sorted alphabetically by email.",
      "Scrolled through several screens of rows with no stutter and no pagination controls; pressed End to confirm the entire user base renders as one continuous list.",
      "Searched the Email box with a full email, a domain, and a name fragment, each correctly returning only the matching subset — including internal Employee and Sales Rep accounts, not only customer logins.",
      "Clicked the Actions icon on a Customer, an Employee, and a Sales Rep row: same “ACCOUNT SETTINGS” modal, same fields, regardless of USER TYPE.",
      "On a Sales Rep row's modal, noticed “Order Entry Access” rendered as a solid gray-filled square unlike every other checkbox on the form. Toggled it, then clicked CANCEL, then reopened the modal: confirmed the change was correctly discarded.",
      "Cross-checked the Actions column's icon and the two never-populated columns (COMPANY, USER TYPE) against the same patterns found on Case 05 (Manage Reports).",
    ],
    findings: [
      {
        n: 1,
        title: "A checkbox's “checked” state renders as an ambiguous gray fill instead of a checkmark",
        severity: "Medium",
        priorityNote:
          "Medium — worth fixing promptly since it affects a real permission field an admin might rely on, but the true state is still recoverable (click and observe the toggle), so it isn't a data-accuracy bug like Case 03's Finding 2.",
        heuristic: "Visibility of system status · Consistency and standards",
        category: "Visibility & Status",
        viewport: "Desktop",
        body: [
          "The “Order Entry Access” checkbox inside the ACCOUNT SETTINGS modal, when checked, does not render with a checkmark the way every other true/checked indicator in the app does. Instead it renders as a plain, solid gray-filled square — easy to read as “off” rather than “on.”",
          "Confirmed directly: clicking the box toggled it to a normal empty white square (proving it isn't disabled), and reopening after CANCEL showed the gray-filled state again, unchanged — this is the control's genuine default rendering for “checked,” not a stuck state. The same exact rendering reproduces on Case 05, in two more places — one shared checkbox component misstyled across the app, not three unrelated bugs.",
        ],
        recommendation:
          "Give this checkbox component's checked state the same checkmark treatment used elsewhere in the app, so “on” and “off” are unambiguous at a glance.",
        images: [
          { src: img_manage_users_04_manage_users_order_entry_access_checkbox_ambiguous, caption: "“Order Entry Access” checkbox rendering as an ambiguous gray fill" },
          { src: img_manage_users_03_manage_users_actions_modal_loading_spinner, caption: "The same low-contrast, centered spinner from Case 03, reproducing on this screen" },
        ],
      },
      {
        n: 2,
        title: "The “Actions” column uses a different icon here than on Manage Reports",
        severity: "Low",
        priorityNote: "Low on its own — neither control is broken — but it's another data point in the design-system gap already tracked since Case 01.",
        heuristic: "Consistency and standards",
        category: "Design System",
        viewport: "Desktop",
        body: [
          "Manage Users' ACTIONS column uses a single horizontal-lines-with-pencil glyph for every row, opening one direct edit modal with no menu. Manage Reports' ACTIONS column (Case 05) uses a vertical three-dot “kebab” menu instead, opening a dropdown of several distinct actions. Both columns share the identical “ACTIONS” header label and sit one click apart in the same ADMINISTRATION section.",
        ],
        recommendation:
          "Standardize on one icon per interaction pattern — a pencil for a single direct action, a kebab menu for several — applied consistently across both screens.",
        images: [],
      },
      {
        n: 3,
        title: "The COMPANY column is defined but never populated, for any user",
        severity: "Low",
        priorityNote: "Low — cosmetic, doesn't block or mislead any task tested here.",
        heuristic: "Visibility of system status · Aesthetic and minimalist design",
        category: "Visibility & Status",
        viewport: "Desktop",
        body: [
          "Every row in the table — Customer, Employee, and Sales Rep accounts alike, across roughly 500 rows checked — shows a blank COMPANY cell. No row seen during this pass had any value in that column.",
        ],
        recommendation: "Confirm with engineering whether COMPANY is expected to populate under any real condition; if not, consider hiding it until it is.",
        images: [
          { src: img_manage_users_01_manage_users_list_default_state, caption: "Manage Users list — COMPANY column blank across the visible rows" },
        ],
      },
      {
        n: 4,
        title: "Some rows have a blank USER TYPE with a “Validate” status",
        severity: "Low",
        priorityNote: "Low — affects a small minority of rows and doesn't block searching, viewing, or editing any account.",
        heuristic: "Match between system and the real world",
        category: "Visibility & Status",
        viewport: "Desktop",
        body: [
          "A handful of rows show no value at all in USER TYPE, with STATUS reading “Validate” rather than “Activated.” One additional row has a blank USER TYPE but shows “Activated.” This reads as a data/onboarding-state edge case out of several hundred accounts, rather than a systemic bug.",
        ],
        recommendation:
          "Requires functional validation with the team — confirm whether “Validate” status accounts are mid-provisioning, or whether USER TYPE should always be populated.",
        images: [
          { src: img_manage_users_02_manage_users_employee_sales_rep_search_results, caption: "Search results — Employee and Sales Rep account rows" },
        ],
      },
      {
        n: 5,
        title: "No responsive/mobile treatment exists for this screen",
        severity: "Low",
        priorityNote: "Low — this is a deliberate, known scope gap on an internal admin tool, not a regression or a broken experience; desirable to fix eventually, not urgent.",
        heuristic: "Flexibility and efficiency of use",
        category: "Responsive",
        viewport: "Desktop",
        body: [
          "Per the UX Assessment Lead, Manage Users (along with Manage Reports) was never designed with a tablet or mobile layout, unlike every customer/Sales-Rep-facing screen covered in Cases 01–03. Being an internal, back-office screen, this is a reasonable gap to have deprioritized — but worth recording as a known, deliberate limitation.",
        ],
        recommendation:
          "When responsive work is prioritized for ADMINISTRATION, Manage Users' wide, many-column table would need a real mobile treatment rather than a simple reflow.",
        images: [],
      },
    ],
    positives: [
      "The Email search box filters live and correctly across an exact match, a domain-only search, and a name fragment, with no stale results.",
      "The full list — several hundred rows — scrolls as one continuous table with no stutter, no broken lazy-loading, and no dead zones.",
      "USER TYPE correctly distinguishes Customer, Employee, and Sales Rep accounts in the same list — it lists every account type, internal and customer-facing alike.",
      "IS B2B ADMIN renders correctly with a real checkmark for at least one account, narrowing Finding 1 specifically to the ACCOUNT SETTINGS modal's own checkbox styling.",
      "The Actions modal opens the same layout regardless of the row's USER TYPE — one consistent edit experience, not three different ones.",
      "CANCEL correctly discards unsaved changes: a checkbox toggled during this pass reverted to its original state on reopening.",
    ],
    notes: [
      "“Show Inactive” produced no visible change in either state during this pass — inconclusive rather than a negative finding, since no row seen showed STATUS “Inactive.”",
      "DELETE was visible on every modal but never clicked, to avoid deleting a real account.",
      "Findings 1 and 2 are cross-referenced with Case 05, where the same two patterns were found independently — likely two single, shared-component fixes rather than four separate issues.",
      "Finding 5 is cross-referenced with Case 05's own responsive-gap finding — both ADMINISTRATION screens share the same gap, most likely built without a mobile use case from the start.",
    ],
  },

  // ---------------------------------------------------------------------
  {
    n: "05",
    title: "Administration: Manage Reports (list & row Actions)",
    screenTag: "Admin · Desktop only",
    statusBadges: ["Completed", "No responsive treatment"],
    description:
      "Targeted heuristic evaluation of ADMINISTRATION → Manage Reports (/administration/manage-reports): the list itself, and the per-row “Actions” control's three actions (Check images, Check prices, Share via Email) — with an explicit cross-screen consistency check against Case 04. Run as a matched pair with Case 04 per the UX Assessment Lead's request. Desktop only, by design, for the same reason as Case 04. “RUN PRICE CHECK” and “SHARE” were never clicked, to avoid a real CSV download or a real outgoing email.",
    steps: [
      "Opened Manage Reports: a single 15-row table (TYPE, REPORT NAME, CREATED, SHAREABLE LINKS, USERS, ACTIONS) covering the 10 fixed report types, “Favorites”, and the four seasonal linesheets.",
      "Searched “fall” in the Report Name box: live-filtered instantly to the single matching row. Cleared it and confirmed the full list returned.",
      "Clicked the Actions kebab menu on “Favorites”: three items — Check images, Check prices, Share via Email.",
      "Ran “Check images” on Fall 2026 (the real, populated default report): a proper inline loading state resolved to 58 styles / 221 colors checked, 0 issues found.",
      "Opened “Check prices” on Fall 2026: a Price Audit modal listing 23 price combinations, header reading “23 price combination(s) selected” — but none of the 23 checkboxes showed a checkmark. Clicked “Clear all” to confirm the gray fill genuinely represented “selected.”",
      "Opened “Share via Email” on Fall 2026: a Sharing Options modal with a pre-checked “On Date” expiry checkbox showing the same ambiguous gray-fill rendering. Closed via CANCEL without sharing anything.",
    ],
    findings: [
      {
        n: 1,
        title: "The “Actions” column uses a different icon here than on Manage Users",
        severity: "Low",
        priorityNote: "Low on its own, same design-system pattern already tracked since Case 01.",
        heuristic: "Consistency and standards",
        category: "Design System",
        viewport: "Desktop",
        body: [
          "Manage Reports' ACTIONS column uses a kebab menu for every row, opening a dropdown of three distinct actions. Manage Users' ACTIONS column (Case 04) uses a single edit glyph instead, opening one direct modal. Here the kebab-menu pattern is the right choice, since this screen genuinely has three separate actions per row — this finding is that the two screens disagree with each other under the same “ACTIONS” label, not that either got it wrong on its own.",
        ],
        recommendation: "Standardize which icon represents “one direct action” vs. “a menu of several,” and apply it consistently to both screens.",
        images: [
          { src: img_manage_reports_02_manage_reports_actions_dropdown_menu, caption: "Actions kebab menu — Check images, Check prices, Share via Email" },
        ],
      },
      {
        n: 2,
        title: "Checked checkboxes render as an ambiguous gray fill, with no checkmark, in two places on this screen",
        severity: "Medium",
        priorityNote:
          "Medium — the Price Audit case could lead to an admin running (or skipping) checks against the wrong scope of price levels without realizing it, since “everything selected” is the hardest state to visually distinguish from “nothing selected.”",
        heuristic: "Visibility of system status · Consistency and standards",
        category: "Visibility & Status",
        viewport: "Desktop",
        body: [
          "Both the Price Audit modal's currency/price-level checkboxes and the Sharing Options modal's “Link expires: On Date” checkbox render their true/checked state as a solid gray-filled square, identical to Case 04's “Order Entry Access” issue.",
          "Confirmed directly on the Price Audit: the modal opened with all 23 combinations pre-selected, yet none showed a checkmark. Clicking “Clear all” dropped the count to 0 and switched every box to a plain white outline, proving the gray fill genuinely represents “selected” — just without the checkmark that would normally signal it.",
        ],
        recommendation:
          "Same as Case 04 — this is very likely one shared checkbox component; give its checked state a visible checkmark consistent with the rest of the app.",
        images: [
          { src: img_manage_reports_05_manage_reports_price_audit_checkboxes_ambiguous, caption: "Price audit — 23 combinations selected, none show a checkmark" },
          { src: img_manage_reports_06_manage_reports_price_audit_single_checkbox_state, caption: "A single checkbox selected — same gray-fill rendering" },
          { src: img_manage_reports_07_manage_reports_sharing_options_modal, caption: "Sharing Options — “On Date” checkbox, same ambiguous rendering" },
        ],
      },
      {
        n: 3,
        title: "The TYPE column is defined but never populated, for any report",
        severity: "Low",
        priorityNote: "Low — cosmetic, doesn't block any task tested here.",
        heuristic: "Visibility of system status · Aesthetic and minimalist design",
        category: "Visibility & Status",
        viewport: "Desktop",
        body: [
          "All 15 rows in the table — every fixed report type and every seasonal linesheet — show a blank TYPE cell, the same pattern as Case 04's COMPANY column.",
        ],
        recommendation:
          "Confirm with engineering whether TYPE is meant to categorize reports and simply isn't wired up yet, or whether the column should be removed.",
        images: [
          { src: img_manage_reports_01_manage_reports_list_default_state, caption: "Manage Reports list — TYPE column blank across all 15 rows" },
        ],
      },
      {
        n: 4,
        title: "The USERS column shows 0 for every report, including the live default report every Sales Rep and Buyer lands on",
        severity: "Low",
        priorityNote:
          "Low-Medium — nothing observable breaks because of it, but if this number is ever surfaced to an admin as a usage signal, it's currently misleading for the app's most important report.",
        heuristic: "Visibility of system status · Match between system and the real world",
        category: "Visibility & Status",
        viewport: "Desktop",
        body: [
          "Every row's USERS column reads 0 — including “Fall 2026,” the exact report that auto-executes and lands every logged-in user on it immediately after login (per Case 02). The SHAREABLE LINKS column right next to it shows real, varied, non-zero counts per report, which suggests the table's data layer works in general — it's specifically USERS that's suspicious.",
        ],
        recommendation:
          "Requires functional validation with the team — confirm exactly what USERS is meant to count, and whether Fall 2026 legitimately has 0 by that definition.",
        images: [],
      },
      {
        n: 6,
        title: "No responsive/mobile treatment exists for this screen",
        severity: "Low",
        priorityNote: "Low — this is a deliberate, known scope gap on an internal admin tool, not a regression; desirable to fix eventually, not urgent.",
        heuristic: "Flexibility and efficiency of use",
        category: "Responsive",
        viewport: "Desktop",
        body: [
          "Per the UX Assessment Lead, Manage Reports (along with Manage Users) was never designed with a tablet or mobile layout. Being an internal, back-office screen, this is a reasonable, deliberate gap — but worth recording rather than leaving undocumented.",
        ],
        recommendation:
          "Manage Reports' table would likely reflow more easily than Manage Users', but its three Actions modals — particularly the Price Audit's checkbox grid — would each need their own mobile layout pass.",
        images: [],
      },
    ],
    positives: [
      "The Report Name search box filters live and correctly.",
      "The full report list (15 rows) is short, complete, and needs no pagination.",
      "“Check images” is a genuinely well-built feature: correct, non-zero counts on a real populated report, with a proper inline loading state and descriptive text — a positive contrast with Case 03's low-contrast spinner.",
      "“Check prices” correctly lists every real currency/price-level combination actually configured in the system — the only issue is the checkbox styling.",
      "“Share via Email” / Sharing Options offers sensible, complete controls — a fully thought-out feature, not a stub.",
      "SHAREABLE LINKS shows plausible, varied real counts per report, in contrast to the suspicious USERS column.",
    ],
    notes: [
      "“RUN PRICE CHECK” and “SHARE” were never clicked, to avoid a real CSV download or a real outgoing email during testing.",
      "Findings 1 and 2 are cross-referenced with Case 04, where the same two patterns were found independently — likely shared-component fixes rather than separate bugs per screen.",
      "The Sharing Options modal's title doesn't match the menu item that opens it — a small naming mismatch, not raised as its own finding since the modal's actual scope is broader than “email” alone.",
      "Finding 6 is cross-referenced with Case 04's Finding 5 — both ADMINISTRATION screens share the same responsive gap.",
    ],
  },

  // ---------------------------------------------------------------------
  {
    n: "06",
    title: "Style cards: view formats, color browsing, and icon consistency",
    screenTag: "Catalog browsing",
    statusBadges: ["Completed"],
    description:
      "Card-level testing of style cards on a linesheet report (/reports/3771, Fall 2026): the three advertised View formats (Gallery, Standard, Extended), whether color/size/availability/price data agrees across formats and widths, whether a style's photos can be browsed and enlarged for each available color, and how a card hands off into the detail drawer (the drawer's own content is Case 07's scope). A closing icon-consistency check was added at the UX Assessment Lead's request before closing the case. Desktop used the user's own real Chrome session; tablet and mobile used viewport emulation on the same authenticated session.",
    steps: [
      "Confirmed the three View icons — Gallery, Standard card, and Extended list — and switched between all three, re-verifying the active-state highlight moves correctly each time.",
      "Hovered a card's photo: a fullscreen icon, a favorite star, and left/right navigation arrows appeared. Paging through them crossed from one color into the next within one sequential photo set.",
      "Checked the color-swatch row while paging through colors via the arrows: no swatch showed any highlight reflecting the color currently on screen. Clicked a swatch directly: it only toggled the inline size/availability table, without changing the displayed photo.",
      "Opened the full-screen lightbox from a card's photo: same content and arrow-paging behavior, in a larger overlay with its own favorite star.",
      "Retested at 768×1024: the three View buttons are genuinely distinct at this width once retested carefully (an initial pass had wrongly concluded otherwise — corrected, see Notes). Hovering shows the fullscreen icon and star but not the color-browsing arrows; those are reachable one click away via the image gallery.",
      "Retested at 375×812 jointly with the UX Assessment Lead: the “...” menu showed “Show Favorites” listed twice; tapping a color swatch directly opened the detail drawer pre-scoped to that color — a positive, mobile-specific improvement.",
      "Before closing the case, inspected two icons the UX Assessment Lead flagged by eye directly in the page's own code: the card's drawer-entry icon and the mobile “...” icon, comparing them against the app's real inline-SVG icon system.",
    ],
    findings: [
      {
        n: 1,
        title: "The color swatches don't indicate which color is currently being shown via the arrow-browsed photos",
        severity: "Low",
        priorityNote: "Low — this doesn't block anything, since the photo itself always shows the true current color; it's a missed opportunity for a clearer status cue.",
        heuristic: "Visibility of system status",
        category: "Visibility & Status",
        viewport: "Desktop",
        body: [
          "Paging through a card's photos with the hover arrows (or the lightbox) does cross from one available color into the next, but nothing in the swatch row reflects that — no highlight, border, or other selected-state change, no matter which color the visible photo has moved to.",
        ],
        recommendation: "Highlight whichever swatch corresponds to the color currently shown by the arrows/lightbox, updating it live as the user pages through.",
        images: [
          { src: img_style_cards_01_style_cards_standard_view_default, caption: "Standard card view — swatch row shown alongside the photo" },
        ],
      },
      {
        n: 2,
        title: "Clicking a color swatch doesn't jump to that color's photo directly",
        severity: "Low",
        priorityNote: "Low — full color browsing is confirmed possible via the arrows, so nothing is actually inaccessible; this is an efficiency gap, not a blocker.",
        heuristic: "Match between system and the real world · Flexibility and efficiency of use",
        category: "Design System",
        viewport: "Desktop",
        body: [
          "The swatches look like they should let you pick a color and see it immediately, but clicking one only opens or closes the inline size/availability table — it has no effect on which photo is displayed. The only path to a specific color's photo on desktop is paging sequentially through the hover arrows or the lightbox.",
        ],
        recommendation:
          "Wire a swatch click to jump the photo directly to that color's first photo — mobile's own swatch behavior already does something close to this.",
        images: [],
      },
      {
        n: 3,
        title: "At 768px, browsing colors from the grid means opening the image gallery first",
        severity: "Low",
        priorityNote: "Low — nothing is hidden or broken; a user can still reach every color's photo in one extra click via the gallery, which is easy to find.",
        heuristic: "Consistency across breakpoints · Efficiency of use",
        category: "Responsive",
        viewport: "Tablet",
        body: [
          "On desktop, hovering a card's photo reveals left/right arrows that page directly through every available color's photos. At 768px, the same hover still reveals the fullscreen icon and the star, but not the arrows — the only way to page from one color to the next is to first open the full-screen gallery, which does have working arrows.",
        ],
        recommendation:
          "No change strictly needed, since the gallery is one click away — or, for more parity with desktop, show simplified arrows directly on the card at this width.",
        images: [],
      },
      {
        n: 4,
        title: "The mobile “...” menu lists “Show Favorites” twice",
        severity: "Low",
        priorityNote: "Low — both toggles stay in sync and the feature works correctly either way; this is a visual/markup cleanup, not a functional defect.",
        heuristic: "Consistency and standards · Error prevention",
        category: "Design System",
        viewport: "Mobile",
        body: [
          "Opening the “...” menu at 375px shows two separate “Show Favorites” rows, both genuinely separate elements sharing the same (invalid) HTML id, both wired to the same underlying state — toggling either toggles both, and the grid filters correctly either way.",
        ],
        recommendation: "Remove the duplicate row from the mobile dropdown's markup, keeping a single “Show Favorites” entry.",
        images: [],
      },
      {
        n: 5,
        title: "Two icons on this screen (and a third documented elsewhere) don't participate in the app's real icon system, with measurable visual consequences",
        severity: "Low",
        priorityNote: "Low — nothing here is broken or blocks a task; this is a visual-consistency and design-system finding, worth fixing as part of a broader icon cleanup.",
        heuristic: "Consistency and standards · Recognition over recall",
        category: "Design System",
        viewport: "Desktop, Tablet, Mobile",
        body: [
          "The card's drawer-entry icon is a static SVG loaded via <img>, with a hard-coded fill color (#90807B) that does not match the app's actual live icon color (#5C4F48, computed from the neighboring favorite-star and expand icons) — a real, measurable color mismatch, not just a subjective impression. Because it's a flat image, it can also never pick up a hover state or a future theme change.",
          "The mobile header's “...” icon is a PNG raster inside a circular button, structurally outside the app's inline-SVG icon system. Checking whether the same “more options” concept appears elsewhere in the product turned up not one consistent icon but three unrelated ones across this screen and Cases 04–05.",
        ],
        recommendation:
          "Bring the drawer-entry icon into the same inline-SVG system as the rest of the card. Standardize on one “more options” icon and reuse it everywhere the product needs that concept.",
        images: [],
      },
    ],
    positives: [
      "All three View formats work correctly and are each genuinely distinct at every width tested, and switching between them correctly updates both layout and active-state highlight every time.",
      "A style's photos across every available color can be browsed directly from the card at every width — via desktop's hover arrows, or the full-screen gallery on tablet and mobile.",
      "Standard view's inline per-color table and Extended view's full table agree exactly on every figure checked, across multiple styles and all three widths.",
      "The favorite star and “Show Favorites” filter work correctly together end to end at every width.",
      "Two touch-appropriate adaptations at 375px stood out as genuine improvements: the fullscreen icon and favorite star show by default (no hover needed), and tapping a color swatch jumps straight into the detail drawer pre-scoped to that color.",
    ],
    notes: [
      "This case's first desktop pass drew two conclusions the UX Assessment Lead corrected after review, both verified and folded into the write-up above: “Gallery view” isn't non-functional (it's simply the default), and a style's other colors ARE reachable via the hover arrows.",
      "The tablet follow-up itself needed a correction: an initial pass reported the three View buttons rendering identically, which didn't survive a careful retest checking actual page state after each click rather than trusting the screenshot alone.",
      "This case deliberately did not evaluate the detail drawer's own content once opened — full drawer evaluation is Case 07.",
      "Screenshots could not be saved as evidence for the tablet or mobile follow-ups: the built-in browser's screenshot tool doesn't currently support cropping a region to a file, so those sections rely on the step-by-step written account, cross-checked against real page state.",
      "A fourth View button appears at wider desktop widths (around 1280px) — not tested here, flagged as a candidate for its own small follow-up case.",
    ],
  },

  // ---------------------------------------------------------------------
  {
    n: "07",
    title: "Adding to cart: quantities by size and color, and cart verification",
    screenTag: "Buyer journey",
    statusBadges: ["Completed"],
    description:
      "Cognitive walkthrough of “Adding items to the cart”: browsing to a style, opening its detail drawer, selecting different quantities across sizes and colors, adding to cart, and verifying the resulting cart line by line — retested at desktop, 768px tablet, and 375px mobile. Also includes a desktop-only accessibility spot check of the drawer, a desktop-only check of the favorite star's coupling with cart membership, and a desktop-only check of the header cart icon's visibility when switching reports. Real quantities were added and later removed via “Remove Color” to leave the shared account as found; “Submit Orders” was never clicked.",
    steps: [
      "Opened the Fall 2026 report and its style detail drawer for “3/4 Sleeve Boatneck” (PA1136), defaulting to Black, with a per-size quantity table below the photo.",
      "Typed 250 into a size row (Available 200, arriving 450): accepted with no warning. Typed 99999: the field's border turned red and “ADD TO CART” disabled, with no error text anywhere explaining why. Narrowed the exact ceiling: 650 accepted, 651 rejected — exactly Available + the known incoming batch.",
      "Set distinct quantities across sizes for Black (14 units) and, after switching color, for Dark Navy (12 units), adding both to cart.",
      "Verified the cart (“ORDER PREVIEW”): both colors matched the drawer exactly, size by size, with a correct $988.00 / 26-unit total. Used “Edit Quantity” to reopen the drawer pre-filled with saved values, and the bulk “+” stepper to confirm it clamps silently at each size's true maximum, never producing an invalid value.",
      "Accessibility spot check (desktop only): inspected all 7 images in the drawer (no alt text on any), the 5 color swatches (plain divs, no tabindex/role), and traced a live Tab-key path confirming the swatches are never reached by keyboard.",
      "Retested the core flow at 768px: every result matched desktop exactly, but Dark Navy's favorite star switched on by itself right after “ADD TO CART” — with no click on the star — leading to a follow-up on the star's dual role.",
      "Retested the core flow at 375px: the availability-limit gap, quantities, and cart totals all matched desktop and tablet exactly; a color swatch tap on the catalog card opened the drawer directly, pre-scoped to that color.",
      "Desktop-only follow-up: added units to the Fall 2026 cart, then switched to the Spring 2027 report without touching the cart — the header cart icon disappeared entirely, even though the Fall 2026 line was still sitting untouched.",
    ],
    findings: [
      {
        n: 1,
        title: "Exceeding a size's real availability by typing a number gives no explanation anywhere, only a red border",
        severity: "Medium",
        priorityNote:
          "Medium — the cap is genuinely enforced and no bad data can reach the cart, but this will be hit routinely on a frequent, everyday flow any time inventory is tight, and currently offers no way to recover from it except guesswork.",
        heuristic: "Visibility of system status · Recognition, diagnosis, and recovery from errors · Reliance on color",
        category: "User Control & Errors",
        viewport: "Desktop, Tablet, Mobile",
        body: [
          "Every size in the drawer's quantity table has a real, enforced maximum equal to its current “Available” figure plus its known future incoming batch — confirmed precisely (650 accepted, 651 rejected). Typing a number above that maximum is accepted into the field, but the moment it crosses the line, the input's border turns red and both “ADD TO CART” and “UPDATE QUANTITY” become disabled, with no text, tooltip, or accessible label anywhere saying what happened or what the actual maximum is.",
          "This is inconsistent with the drawer's own “+” stepper: clicking it enough times never produces an invalid number at all — it simply stops incrementing exactly at the true maximum, with no error state ever shown. Reproduced identically at every width tested.",
        ],
        recommendation:
          "Add an inline message near the field when it's over the limit (e.g. “Maximum available: 650”), wired to the input via aria-describedby so it's not conveyed by color alone.",
        images: [
          { src: img_add_to_cart_01_drawer_black_quantity_exceeds_availability_error, caption: "Typing far beyond a size's real availability produces only a red-bordered field" },
        ],
      },
      {
        n: 2,
        title: "The color swatches in the drawer cannot be reached or operated with the keyboard at all",
        severity: "High",
        priorityNote:
          "High — this isn't a rough edge on an already-reachable control, it's a complete keyboard dead end on a control with no alternative path, blocking a core action for anyone who can't use a mouse.",
        heuristic: "Accessibility · Keyboard operability",
        category: "Accessibility",
        viewport: "Desktop",
        body: [
          "The 5 color swatches in the drawer are plain div elements with no tabindex, no role=\"button\", and no aria-label — confirmed by inspecting every swatch's properties and by a live Tab-key trace through the whole drawer, which skips straight from the header icon buttons to the first quantity field without ever landing on a swatch. A keyboard-only user can open the drawer and set quantities for the default color, but cannot reach any of the style's other colors from the drawer at all.",
        ],
        recommendation:
          "Give each swatch a real interactive role — a native button, or a div role=\"button\" tabindex=\"0\" with an aria-label built from the color name already available in the existing title attribute.",
        images: [
          { src: img_add_to_cart_08_color_swatches_plain_divs_not_focusable, caption: "The color swatches are plain, non-focusable divs — completely skipped by the keyboard" },
        ],
      },
      {
        n: 3,
        title: "The drawer's images have no alt text, and its two most-used controls show no visible focus indicator",
        severity: "Medium",
        priorityNote:
          "Medium — neither issue blocks a sighted mouse user, but together they make the drawer meaningfully harder to use with a screen reader or keyboard alone, on top of Finding 2's complete color-switching dead end.",
        heuristic: "Accessibility · Visibility of system status",
        category: "Accessibility",
        viewport: "Desktop",
        body: [
          "All 7 img elements in the drawer — the main garment photo and 5 color-swatch thumbnails — have no alt attribute at all. Separately, focus visibility is inconsistent: the 3 header icon buttons keep the browser's default focus outline, but the 5 quantity fields and, notably, the main action button all have outline: none with no replacement focus style.",
        ],
        recommendation:
          "Add a descriptive alt to the garment photo and swatches. Restore a visible :focus-visible style to the quantity inputs and the action button, consistent with the header icon buttons.",
        images: [
          { src: img_add_to_cart_07_add_to_cart_button_no_visible_focus_indicator, caption: "The main action button has no visible focus indicator at all, even while focused" },
          { src: img_add_to_cart_06_drawer_close_button_visible_focus_ring, caption: "Contrast: the header icon buttons DO keep a visible default focus ring" },
        ],
      },
      {
        n: 4,
        title: "The favorite star doubles as a cart-membership toggle, and un-favoriting doesn't actually persist",
        severity: "Medium",
        priorityNote:
          "Medium. A favorite toggle that silently fails to persist is a real, confirmed, user-facing defect, but no order quantities are at risk in the case actually tested — the untested real-quantity scenario could still turn out to matter more once checked.",
        heuristic: "Match between system and the real world · Visibility of system status · User control and freedom",
        category: "Design System",
        viewport: "Tablet",
        body: [
          "Not a bug in its core design — a deliberate business decision, explained by the UX Assessment Lead after this case surfaced it as an unexplained observation: the star doesn't only mark a favorite. Tapping it adds the item to the cart at quantity 0, and favorite status is entirely derived from whether the item currently has a cart line — there's no separate place a “favorite” is recorded.",
          "Testing confirmed un-starring does not remove the item from the cart — the line stays exactly as it was, so the star reverts to marked once the report is refreshed. The star's meaning departs from the near-universal “save this for later” convention, collapsing browsing/curating and transacting into one icon.",
        ],
        recommendation:
          "Decide whether un-favoriting an empty cart line should remove it — if so, a straightforward fix; if favorite lines are meant to persist, the star's on/off affordance shouldn't visually promise a toggle it can't deliver.",
        images: [],
      },
      {
        n: 5,
        title: "The header cart icon is scoped to whichever report is currently open, not to whether there's anything pending anywhere in the account",
        severity: "High",
        priorityNote:
          "High. This isn't a rough edge inside one drawer — it's a gap in the primary, sitewide indicator for “you have an open order,” for what looks like the normal way this product gets used. A missed or forgotten cart is the kind of thing that turns into a real business cost.",
        heuristic: "Visibility of system status · Consistency",
        category: "Visibility & Status",
        viewport: "Desktop",
        body: [
          "The small cart icon in the header isn't a simple “cart has items” indicator — it's scoped to the specific report currently being viewed. With the cart genuinely empty the icon is absent; adding real quantities makes it appear; switching to a different report makes it disappear completely, even though the original order is still sitting there untouched. The underlying cart data never changes across any of this — only the icon's presence does.",
          "A secondary global check (“MY ACCOUNT” → “Carts list”) does correctly detect an active cart regardless of which report is open, but its own totals are unreliable ($0.00 for a cart the real Order Preview screen correctly totaled elsewhere).",
        ],
        recommendation:
          "Make the header cart icon reflect the account's cart state globally — present whenever any report/season has a pending cart, the way “Carts list” already correctly detects it.",
        images: [],
      },
    ],
    positives: [
      "The full journey — browse, open a drawer, enter distinct quantities across multiple sizes and colors, add to cart, and verify — worked correctly end to end at every width, matching the drawer exactly on every figure checked.",
      "The app enforces each size's real availability precisely — current stock plus a known future batch, right down to the unit — reproduced identically at all three widths.",
      "Two separate guard dialogs proactively protect against silently losing entered quantities.",
      "The cart's per-line “⋮” menu is a complete, sensible set of controls; Edit Quantity correctly reloads the exact saved quantities at every width.",
      "The entire core journey behaves identically at 768px and 375px as on desktop, and mobile adds a genuine, touch-appropriate improvement: a swatch tap opens the drawer directly, pre-scoped to that color.",
    ],
    notes: [
      "“Move To Another Delivery” and “Duplicate” (seen in the cart's per-line menu) were not tested here — outside this case's scope; see Case 08.",
      "Only one style and two colors were used for this case's evidence — the underlying behavior is a shared component used across the catalog per Case 06's own findings, so these findings are expected to generalize, but weren't independently re-confirmed on a second style.",
      "The accessibility spot check covered only this same drawer, on this same style and color, on desktop — not the cart page, not other drawers, and not screen-reader software itself.",
      "At 375px, the built-in browser's click action reliably timed out on every attempt — a previously-seen limitation below tablet width. Every mobile interaction in this case was instead driven via direct JavaScript clicks on the page's own elements, with screenshots used to visually confirm each result — a testing-tool limitation, not a defect in the site.",
    ],
  },

  // ---------------------------------------------------------------------
  {
    n: "08",
    title: "Cart editing and order placement: quantities, line removal, and delivery-date management",
    screenTag: "Buyer journey",
    statusBadges: ["Completed", "Mobile: blocked"],
    description:
      "Cognitive walkthrough of “Cart Editing / Order Placement”: building cart test data across styles/colors/sizes, then testing quantity editing, line removal, and — the primary focus — every delivery-date management action available from the cart's “⋮” menus (Add Delivery, Edit Delivery Dates, Move To Another Delivery, Duplicate, Remove Delivery), through to the checkout validation step. Desktop tested using the user's own real Chrome session; the tablet (768px) retest used this session's built-in browser. A mobile (375px) retest was attempted — first directly, then via a collaborative workflow with the UX Assessment Lead performing clicks directly — but interactions began timing out in a way that also affected the UX Assessment Lead's own direct click, pointing to a genuine site or environment condition rather than a testing-tool limitation. The case is closed with desktop and tablet coverage only.",
    steps: [
      "Built cart test data across two styles and three color lines, confirming they grouped correctly under one delivery header with per-line and delivery-level “⋮” menus.",
      "Edit Delivery Dates: selecting a date via an actual calendar-cell click, then Save, persisted correctly every time. Typing a date directly into the field appeared to fail silently under this session's own automated testing — reproduced repeatedly, then retracted after the UX Assessment Lead tested the identical interaction manually, with a real keyboard, and found it works correctly (see Notes).",
      "Add Delivery created a second, empty delivery group with dates auto-suggested 15 days out. “Move To Another Delivery” through the guided flow, using that same suggested default, was blocked immediately with a clear toast. “Duplicate,” through the identical guided path and identical default, succeeded with no block, warning, or toast of any kind.",
      "The only sign anything was wrong after Duplicate appeared as a small orange “!” icon on the cart list, confirmed to also disable “Submit Orders” entirely.",
      "Used “Edit Quantity” and “Remove Color”, both working correctly and predictably, including on an already-invalid line.",
      "With explicit, per-case approval, clicked “Submit Orders” once to observe checkout validation: an “Opening Order Below Season Minimum” dialog, exited via “Go back” with no order placed.",
      "Retested at 768px: calendar-click date editing, the Duplicate/Move asymmetry (at a 15-day offset this time), and Edit Quantity/Remove Color all reproduced identically. Stepping a color line's quantity up one unit at a time resolved the previously-unconfirmed minimum-quantity threshold to exactly 4 units.",
      "Attempted a mobile (375px) retest: direct automated clicks timed out; a collaborative click-relay with the UX Assessment Lead opened one drawer successfully, but the next click — attempted both automatically and by the UX Assessment Lead directly — did not respond either way. The retest was abandoned and the case closed.",
    ],
    findings: [
      {
        n: 1,
        title: "“Duplicate”'s guided flow can create an invalid, checkout-blocking cart state with no front-end warning, unlike the equivalent “Move” flow",
        severity: "High",
        priorityNote:
          "High. This directly parallels a rule the app already enforces correctly elsewhere, so the fix is largely a matter of applying existing logic consistently — and until then, it's a checkout-blocking dead end that's easy to trigger by simply accepting Duplicate's own suggested default.",
        heuristic: "Consistency and standards · Error prevention · Visibility of system status",
        category: "Design System",
        viewport: "Desktop, Tablet",
        body: [
          "“Move To Another Delivery” and “Duplicate” share the same guided per-color “⋮” menu path when only one delivery exists: choosing either offers “Add Delivery” as the only target, auto-suggesting a new delivery date. For “Move,” this default immediately fails the app's own 30-day move-eligibility rule, with a clear red toast — confirmed via both the guided menu path and an equivalent drag-and-drop attempt.",
          "“Duplicate,” walked through the identical guided path with the identical default, has no equivalent check. It succeeds outright — creating a duplicated line with no block, warning, or confirmation of any kind. The only trace that something is wrong is a small orange “!” icon on the cart list, confirmed to disable “Submit Orders” entirely — so the consequence isn't cosmetic, it silently prevents checkout.",
          "Confirmed at tablet width (768px): re-ran both guided flows using an identical 15-days-out default for both actions — Move was blocked immediately with the same toast, Duplicate again succeeded with no block of any kind. Same asymmetry, different offset, reinforcing that the missing check in Duplicate isn't tied to any particular date gap.",
        ],
        recommendation:
          "Apply the same 30-day-window validation already implemented for “Move” to “Duplicate”'s equivalent guided flow, ideally sharing one underlying date-eligibility check rather than two implementations that can drift.",
        images: [
          { src: img_cart_editing_order_placement_07_move_to_delivery_blocked_30_day_window, caption: "“Move To Another Delivery” correctly blocks the same date offset, with a clear toast" },
          { src: img_cart_editing_order_placement_11_duplicate_creates_second_delivery_line, caption: "The identical guided flow, via “Duplicate,” succeeds with no check at all" },
          { src: img_cart_editing_order_placement_12_duplicate_blocks_checkout_hidden_tooltip, caption: "The only feedback: a small icon, discoverable only on hover" },
        ],
      },
      {
        n: 2,
        title: "A per-color minimum-quantity indicator (confirmed at tablet width: threshold 4, advisory-only)",
        severity: "Low",
        priorityNote:
          "Low. Originally flagged Medium on desktop specifically because it was unconfirmed whether this indicator blocked checkout; now that tablet testing has confirmed it does not, this is closer to a positive observation than an outstanding finding.",
        heuristic: "Visibility of system status",
        category: "Visibility & Status",
        viewport: "Desktop, Tablet",
        body: [
          "An orange “!” icon appears near a style's price range in the cart, tied to a circled value on a color row, whenever that color's total quantity falls below the required minimum. Desktop testing observed this at 3 units on two unrelated styles but left the exact threshold and tooltip text unconfirmed.",
          "The tablet retest resolved both: stepping a color line's quantity up one unit at a time, the icon was present at 3 units and gone at 4, pinning the threshold at exactly 4 units per color. Its tooltip reads, in full: “One or more colors are below the required color minimum.” Checked directly against the “Submit Orders” button's disabled property at 3 units: the button remained enabled throughout — this indicator is advisory only.",
        ],
        recommendation:
          "Minor: consider having the tooltip or icon identify which specific color(s) are under the minimum when a style has multiple color rows, rather than the generic phrasing.",
        images: [],
      },
    ],
    positives: [
      "The Start Date calendar correctly disables Saturdays and Sundays outright, preventing a delivery window from ever being set to start on a weekend.",
      "“Move To Another Delivery” enforces its 30-day window rule consistently and clearly across two different interaction paths, with the same specific toast message both times.",
      "“Edit Quantity” round-trips correctly: reopens pre-filled with the row's real saved values, and the update persists to the cart row immediately and durably.",
      "“Remove Color” and “Remove Delivery” both show clear native confirmation dialogs before acting, and work correctly even when the item or delivery being removed is already in an invalid state.",
      "The checkout “Opening Order Below Season Minimum” validation is clear, specific about the exact dollar amount needed, and correctly explains the consequence rather than just blocking with no context.",
      "Confirmed at tablet width (768px): every desktop finding and positive observation carried over unchanged, and the X-Warehouse date field additionally disables every day of its own current month except the already-committed one — a stricter but sensible extension of the weekend-blocking rule.",
    ],
    notes: [
      "Retracted: an earlier draft of this case reported, as a High-priority finding, that typing a date directly into the delivery-date fields silently fails to save. That symptom was reproduced repeatedly through this session's own browser automation, but the UX Assessment Lead then tested the identical interaction manually, multiple times, with a real keyboard, and found it works correctly — a valid typed date saves, an invalid one shows a clear message. Given that direct, repeated conflict, and no way to reproduce the symptom under real human interaction, this is retracted as a confirmed product defect and treated as a likely artifact of this session's own text-injection tooling.",
      "Testing-methodology limitation, not a product finding: after explicit approval to click “Submit Orders” and then “Continue,” the “Continue” click specifically was blocked by this session's own automated safety guardrail, independent of the approval given — “Go back” was used instead, so checkout testing stops one screen short of a final confirm/place-order screen, which remains unobserved.",
      "Mobile (375px) retest attempted, not completed. With a customer selected, a mobile retest was attempted first directly, then via a collaborative workflow with the UX Assessment Lead performing each click on their own machine. One drawer opened successfully, surfacing a new “Delivery” dropdown not seen on desktop or tablet — but the next click, attempted both automatically and by the UX Assessment Lead directly, did not respond either way. Because the UX Assessment Lead's own manual click also failed, this points to a genuine site or environment condition rather than a limitation of any specific testing tool. No cart test data was left behind. The case is closed here, with desktop and tablet (768px) coverage confirmed and mobile (375px) not completed.",
    ],
  },
];
