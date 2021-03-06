import { core } from '@nexus/schema'
import { GlobalComputedInputs } from '../utils'

export declare namespace DmmfTypes {
  interface Document {
    datamodel: Datamodel
    schema: Schema
    mappings: Mapping[]
  }
  interface DatamodelEnum {
    name: string
    values: EnumValue[]
    dbName?: string | null
    documentation?: string
  }
  interface EnumValue {
    name: string
    dbName: string | null
  }
  interface SchemaEnum {
    name: string
    values: string[]
  }
  interface Datamodel {
    models: Model[]
    enums: DatamodelEnum[]
  }
  interface Model {
    name: string
    dbName: string | null
    documentation?: string
    fields: Field[]
    idFields: string[]
    isEmbedded: boolean
    uniqueFields: Array<string[]>
  }
  type FieldKind = 'scalar' | 'object' | 'enum'
  type DatamodelFieldKind = 'scalar' | 'relation' | 'enum'
  interface Field {
    kind: DatamodelFieldKind
    name: string
    isRequired: boolean
    isList: boolean
    isUnique: boolean
    isId: boolean
    type: string
    dbNames: string[] | null
    isGenerated: boolean
    relationToFields?: any[]
    relationOnDelete?: string
    relationName?: string
  }
  interface Schema {
    inputTypes: InputType[]
    outputTypes: OutputType[]
    enums: SchemaEnum[]
  }
  interface QueryOutput {
    name: string
    isRequired: boolean
    isList: boolean
  }
  type ArgType = string
  interface SchemaArg {
    name: string
    inputType: {
      type: ArgType
      kind: FieldKind
      isList: boolean
      isNullable: boolean
      isRequired: boolean
    }
    isRelationFilter?: boolean
  }
  interface OutputType {
    name: string
    fields: SchemaField[]
    isEmbedded?: boolean
  }
  interface SchemaField {
    name: string
    outputType: {
      type: core.AllOutputTypes
      isRequired: boolean
      isNullable?: boolean
      isList: boolean
      kind: FieldKind
    }
    args: SchemaArg[]
  }
  interface InputType {
    name: string
    constraints: {
      maxNumFields: number | null
      minNumFields: number | null
    }
    fields: SchemaArg[]
    computedInputs: GlobalComputedInputs
  }
  interface Mapping {
    model: string;
    plural: string;
    findOne?: string | null;
    //findFirst?: string | null;
    findMany?: string | null;
    create?: string | null;
    update?: string | null;
    updateMany?: string | null;
    upsert?: string | null;
    delete?: string | null;
    deleteMany?: string | null;
    //aggregate?: string | null;
  }
  enum ModelAction {
    findOne = 'findOne',
    findMany = 'findMany',
    create = 'create',
    update = 'update',
    updateMany = 'updateMany',
    upsert = 'upsert',
    delete = 'delete',
    deleteMany = 'deleteMany',
  }
}
