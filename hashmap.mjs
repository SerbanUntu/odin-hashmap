export class HashMap {
	#buckets = []
	#capacity = 16

	#hash(key) {
		let hashCode = 0

		const primeNumber = 47
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i)
			hashCode %= this.#capacity
		}

		return hashCode
	}

	set(key, value) {
		let hashCode = this.#hash(key)

		if (hashCode < 0 || hashCode >= this.#capacity) {
			throw new Error('Trying to access index out of bound')
		}

		if (this.#buckets[hashCode] && this.#buckets[hashCode][0] === key) {
			// Update
			this.#buckets[hashCode][1] = value
		} else if (this.#buckets[hashCode]) {
			//! Collision
		} else {
			// New bucket
			this.#buckets[hashCode] = [key, value]
		}
	}

	get(key) {
		let hashCode = this.#hash(key)

		if (hashCode < 0 || hashCode >= this.#capacity) {
			throw new Error('Trying to access index out of bound')
		}

		if (this.#buckets[hashCode]) {
			return this.#buckets[hashCode][1]
		}
		return null
	}
}
