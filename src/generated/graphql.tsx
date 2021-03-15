import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};




export type BaseResponse = {
  __typename?: 'BaseResponse';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  response?: Maybe<Scalars['JSON']>;
  params?: Maybe<Scalars['JSON']>;
};

export type BaseList = {
  __typename?: 'BaseList';
  count?: Maybe<Scalars['Int']>;
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<BaseName>>>;
  status?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type Ability = {
  __typename?: 'Ability';
  ability?: Maybe<BaseName>;
  is_hidden?: Maybe<Scalars['Boolean']>;
  slot?: Maybe<Scalars['Int']>;
};

export type GameIndex = {
  __typename?: 'GameIndex';
  game_index?: Maybe<Scalars['Int']>;
  version?: Maybe<BaseName>;
};

export type VersionDetail = {
  __typename?: 'VersionDetail';
  rarity?: Maybe<Scalars['Int']>;
  version?: Maybe<BaseName>;
};

export type HeldItem = {
  __typename?: 'HeldItem';
  item?: Maybe<BaseName>;
  version_details?: Maybe<Array<Maybe<VersionDetail>>>;
};

export type VersionGroupDetail = {
  __typename?: 'VersionGroupDetail';
  level_learned_at?: Maybe<Scalars['Int']>;
  move_learn_method?: Maybe<BaseName>;
  version_group?: Maybe<BaseName>;
};

export type Move = {
  __typename?: 'Move';
  move?: Maybe<BaseName>;
  version_group_details?: Maybe<Array<Maybe<VersionGroupDetail>>>;
};

export type Sprite = {
  __typename?: 'Sprite';
  back_default?: Maybe<Scalars['String']>;
  back_female?: Maybe<Scalars['String']>;
  back_shiny?: Maybe<Scalars['String']>;
  back_shiny_female?: Maybe<Scalars['String']>;
  front_default?: Maybe<Scalars['String']>;
  front_female?: Maybe<Scalars['String']>;
  front_shiny?: Maybe<Scalars['String']>;
  front_shiny_female?: Maybe<Scalars['String']>;
};

export type Stat = {
  __typename?: 'Stat';
  base_stat?: Maybe<Scalars['Int']>;
  effort?: Maybe<Scalars['Int']>;
  stat?: Maybe<BaseName>;
};

export type Type = {
  __typename?: 'Type';
  slot?: Maybe<Scalars['Int']>;
  type?: Maybe<BaseName>;
};

export type BaseName = {
  __typename?: 'BaseName';
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Pokemon = {
  __typename?: 'Pokemon';
  abilities?: Maybe<Array<Maybe<Ability>>>;
  base_experience?: Maybe<Scalars['Int']>;
  forms?: Maybe<Array<Maybe<BaseName>>>;
  game_indices?: Maybe<Array<Maybe<GameIndex>>>;
  height?: Maybe<Scalars['Int']>;
  held_items?: Maybe<Array<Maybe<HeldItem>>>;
  id?: Maybe<Scalars['Int']>;
  is_default?: Maybe<Scalars['Boolean']>;
  location_area_encounters?: Maybe<Scalars['String']>;
  moves?: Maybe<Array<Maybe<Move>>>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  species?: Maybe<BaseName>;
  sprites?: Maybe<Sprite>;
  stats?: Maybe<Array<Maybe<Stat>>>;
  types?: Maybe<Array<Maybe<Type>>>;
  weight?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type PokemonItem = {
  __typename?: 'PokemonItem';
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type PokemonList = {
  __typename?: 'PokemonList';
  count?: Maybe<Scalars['Int']>;
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
  nextOffset?: Maybe<Scalars['Int']>;
  prevOffset?: Maybe<Scalars['Int']>;
  params?: Maybe<Scalars['JSON']>;
  results?: Maybe<Array<Maybe<PokemonItem>>>;
  status?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  abilities?: Maybe<BaseList>;
  ability?: Maybe<BaseResponse>;
  berries?: Maybe<BaseList>;
  berry?: Maybe<BaseResponse>;
  eggGroups?: Maybe<BaseList>;
  eggGroup?: Maybe<BaseResponse>;
  encounterMethods?: Maybe<BaseList>;
  encounterMethod?: Maybe<BaseResponse>;
  evolutionChains?: Maybe<BaseList>;
  evolutionChain?: Maybe<BaseResponse>;
  evolutionTriggers?: Maybe<BaseList>;
  evolutionTrigger?: Maybe<BaseResponse>;
  genders?: Maybe<BaseList>;
  gender?: Maybe<BaseResponse>;
  growthRates?: Maybe<BaseList>;
  growthRate?: Maybe<BaseResponse>;
  locations?: Maybe<BaseList>;
  location?: Maybe<BaseResponse>;
  moves?: Maybe<BaseList>;
  move?: Maybe<BaseResponse>;
  natures?: Maybe<BaseList>;
  nature?: Maybe<BaseResponse>;
  pokemons?: Maybe<PokemonList>;
  pokemon?: Maybe<Pokemon>;
  regions?: Maybe<BaseList>;
  region?: Maybe<BaseResponse>;
  species?: Maybe<BaseList>;
  types?: Maybe<BaseList>;
};


export type QueryAbilityArgs = {
  ability: Scalars['String'];
};


export type QueryBerryArgs = {
  berry: Scalars['String'];
};


export type QueryEggGroupArgs = {
  eggGroup: Scalars['String'];
};


export type QueryEncounterMethodArgs = {
  encounterMethod: Scalars['String'];
};


export type QueryEvolutionChainArgs = {
  id: Scalars['String'];
};


export type QueryEvolutionTriggerArgs = {
  name: Scalars['String'];
};


export type QueryGenderArgs = {
  gender: Scalars['String'];
};


export type QueryGrowthRateArgs = {
  growthRate: Scalars['String'];
};


export type QueryLocationArgs = {
  location: Scalars['String'];
};


export type QueryMoveArgs = {
  move: Scalars['String'];
};


export type QueryNatureArgs = {
  nature: Scalars['String'];
};


export type QueryPokemonsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryPokemonArgs = {
  name: Scalars['String'];
};


export type QueryRegionArgs = {
  region: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type GetPokemonsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type GetPokemonsQuery = (
  { __typename?: 'Query' }
  & { pokemons?: Maybe<(
    { __typename?: 'PokemonList' }
    & Pick<PokemonList, 'count' | 'next' | 'previous' | 'status' | 'message'>
    & { results?: Maybe<Array<Maybe<(
      { __typename?: 'PokemonItem' }
      & Pick<PokemonItem, 'id' | 'url' | 'name' | 'image'>
    )>>> }
  )> }
);

export type GetPokemonQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetPokemonQuery = (
  { __typename?: 'Query' }
  & { pokemon?: Maybe<(
    { __typename?: 'Pokemon' }
    & Pick<Pokemon, 'id' | 'name' | 'base_experience'>
    & { sprites?: Maybe<(
      { __typename?: 'Sprite' }
      & Pick<Sprite, 'front_default'>
    )>, moves?: Maybe<Array<Maybe<(
      { __typename?: 'Move' }
      & { move?: Maybe<(
        { __typename?: 'BaseName' }
        & Pick<BaseName, 'name'>
      )> }
    )>>>, types?: Maybe<Array<Maybe<(
      { __typename?: 'Type' }
      & { type?: Maybe<(
        { __typename?: 'BaseName' }
        & Pick<BaseName, 'name'>
      )> }
    )>>>, abilities?: Maybe<Array<Maybe<(
      { __typename?: 'Ability' }
      & { ability?: Maybe<(
        { __typename?: 'BaseName' }
        & Pick<BaseName, 'name'>
      )> }
    )>>>, forms?: Maybe<Array<Maybe<(
      { __typename?: 'BaseName' }
      & Pick<BaseName, 'name'>
    )>>>, stats?: Maybe<Array<Maybe<(
      { __typename?: 'Stat' }
      & Pick<Stat, 'effort' | 'base_stat'>
      & { stat?: Maybe<(
        { __typename?: 'BaseName' }
        & Pick<BaseName, 'name'>
      )> }
    )>>> }
  )> }
);


export const GetPokemonsDocument = gql`
    query GetPokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      id
      url
      name
      image
    }
  }
}
    `;

/**
 * __useGetPokemonsQuery__
 *
 * To run a query within a React component, call `useGetPokemonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetPokemonsQuery(baseOptions?: Apollo.QueryHookOptions<GetPokemonsQuery, GetPokemonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPokemonsQuery, GetPokemonsQueryVariables>(GetPokemonsDocument, options);
      }
export function useGetPokemonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPokemonsQuery, GetPokemonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPokemonsQuery, GetPokemonsQueryVariables>(GetPokemonsDocument, options);
        }
export type GetPokemonsQueryHookResult = ReturnType<typeof useGetPokemonsQuery>;
export type GetPokemonsLazyQueryHookResult = ReturnType<typeof useGetPokemonsLazyQuery>;
export type GetPokemonsQueryResult = Apollo.QueryResult<GetPokemonsQuery, GetPokemonsQueryVariables>;
export const GetPokemonDocument = gql`
    query GetPokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    sprites {
      front_default
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
    abilities {
      ability {
        name
      }
    }
    base_experience
    forms {
      name
    }
    stats {
      stat {
        name
      }
      effort
      base_stat
    }
  }
}
    `;

/**
 * __useGetPokemonQuery__
 *
 * To run a query within a React component, call `useGetPokemonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetPokemonQuery(baseOptions: Apollo.QueryHookOptions<GetPokemonQuery, GetPokemonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPokemonQuery, GetPokemonQueryVariables>(GetPokemonDocument, options);
      }
export function useGetPokemonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPokemonQuery, GetPokemonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPokemonQuery, GetPokemonQueryVariables>(GetPokemonDocument, options);
        }
export type GetPokemonQueryHookResult = ReturnType<typeof useGetPokemonQuery>;
export type GetPokemonLazyQueryHookResult = ReturnType<typeof useGetPokemonLazyQuery>;
export type GetPokemonQueryResult = Apollo.QueryResult<GetPokemonQuery, GetPokemonQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    