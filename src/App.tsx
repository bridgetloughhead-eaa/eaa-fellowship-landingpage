/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Which page the site shows is controlled by the single `courseOpen` flag in
// src/content.ts. See SWITCHING.md in the repo root.
//
//   courseOpen = true   ->  ApplyPage         (full "Apply now" landing page)
//   courseOpen = false  ->  BetweenRoundsPage (newsletter + EAGx, no apply links)

import { courseOpen } from './content';
import ApplyPage from './ApplyPage';
import BetweenRoundsPage from './BetweenRoundsPage';

export default function App() {
  return courseOpen ? <ApplyPage /> : <BetweenRoundsPage />;
}
