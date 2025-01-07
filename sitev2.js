class HttpClient {
    static defaultFailureHandler(error) {
        console.error("Request failed:", error);
    }

    static get(endpoint, success, params = {}, failure = HttpClient.defaultFailureHandler) {
        const queryString = new URLSearchParams(params).toString();
        const urlWithParams = queryString ? `${endpoint}?${queryString}` : `${endpoint}`;

        return $.ajax({
            url: urlWithParams,
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }).done(success).fail(failure);
    }

    static post(endpoint, success, data = {}, failure = HttpClient.defaultFailureHandler) {
        return $.ajax({
            url: endpoint,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(data),
        }).done(success).fail(failure);
    }

    static put(endpoint, success, data = {}, failure = HttpClient.defaultFailureHandler) {
        return $.ajax({
            url: endpoint,
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(data),
        }).done(success).fail(failure);
    }

    static remove(endpoint, success, failure = HttpClient.defaultFailureHandler) {
        return $.ajax({
            url: endpoint,
            method: "DELETE",
            headers: { "Content-Type": "application/json" },            
        }).done(success).fail(failure);
    }
}
