  /**
   * The options used to configure apisauce.
   */
  export interface ApiConfig {
    /**
     * The URL of the api.
     */
    url?: string
  
    /**
     * Milliseconds before we timeout the request.
     */
    timeout?: number
  }
  
  // types for paginated response
  export interface PaginateResponse<T> {
    items: T[];
    total:  number;
  }
  