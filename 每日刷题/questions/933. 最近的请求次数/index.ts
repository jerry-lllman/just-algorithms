/**
 * @leetcode https://leetcode.cn/problems/number-of-recent-calls/
 */

import { ListNodeQueue } from "../../algorithm/queue/2.ListNodeQueue"

class RecentCounter {
	queue: ListNodeQueue<Number>
	constructor() {
		this.queue = new ListNodeQueue()
	}

	ping(t: number): number {
		this.queue.push(t)
		while (this.queue.back() - this.queue.front() > 3000) {
			this.queue.pop()
		}
		return this.queue.size()
	}
}
