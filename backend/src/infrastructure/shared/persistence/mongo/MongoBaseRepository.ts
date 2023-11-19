import { Collection, MongoClient, ObjectId } from 'mongodb'
import { BaseEntity } from '../../../../domain/shared/baseEntity'

export abstract class MongoBaseRepository<T extends BaseEntity> {
  constructor(private readonly client: MongoClient) {}
  protected abstract collectionName(): string

  protected async collection(): Promise<Collection> {
    return this.client.db().collection(this.collectionName())
  }

  protected async persist(entity: T): Promise<void> {
    const collection = await this.collection()
    const { id, ...base } = entity

    await collection.updateOne(
      { _id: id ? new ObjectId(id) : new ObjectId() },
      { $set: base },
      { upsert: true }
    )
  }
}
