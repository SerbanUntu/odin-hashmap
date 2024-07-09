export class HashSet {
	#buckets = []
	#capacity = 16
	#loadFactor = 0.75

	#hash(key) {
		let hashCode = 0

		const primeNumber = 31
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i)
			hashCode %= this.#capacity
		}

		return hashCode
	}

	add(key) {
		let hashCode = this.#hash(key)

		if (hashCode < 0 || hashCode >= this.#capacity) {
			throw new Error('Trying to access index out of bound')
		}

		if (this.#buckets[hashCode] && this.#buckets[hashCode] !== key) {
			//! Collision
			this.#reallocate()
			this.add(key)
		} else {
			// New bucket
			this.#buckets[hashCode] = key
		}

		if (this.length() > this.#loadFactor * this.#capacity) {
			this.#reallocate()
		}
	}

	has(key) {
		let hashCode = this.#hash(key)

		if (hashCode < 0 || hashCode >= this.#capacity) {
			throw new Error('Trying to access index out of bound')
		}

		if (this.#buckets[hashCode] === key) return true
		return false
	}

	remove(key) {
		let hashCode = this.#hash(key)

		if (hashCode < 0 || hashCode >= this.#capacity) {
			throw new Error('Trying to access index out of bound')
		}

		if (this.#buckets[hashCode] === key) {
			this.#buckets[hashCode] = null
			return true
		}
		return false
	}

	length() {
		let result = 0
		for (let i = 0; i < this.#capacity; i++) {
			if (this.#buckets[i]) result++
		}
		return result
	}

	clear() {
		this.#buckets = []
	}

	entries() {
		let result = []
		for (let i = 0; i < this.#capacity; i++) {
			if (this.#buckets[i]) result.push(this.#buckets[i])
		}
		return result
	}

	#reallocate() {
		let entries = this.entries()
		this.clear()
		this.#capacity *= 2
		entries.forEach(entry => {
			this.add(entry)
		})
	}
}
