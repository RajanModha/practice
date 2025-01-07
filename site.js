class HttpClient {
    static defaultFailureHandler(error) {
        console.error("Request failed:", error);
    }

    static get(endpoint, success, params = {}, failure = HttpClient.defaultFailureHandler) {
        console.log("GET triggered");
        console.log(JSON.stringify(params));
        const queryString = new URLSearchParams(params).toString();
        const urlWithParams = queryString ? `${endpoint}?${queryString}` : `${endpoint}`;

        return $.ajax({
            url: urlWithParams,
            method: "GET",
            xhrFields: { withCredentials: true },
            headers: { "Content-Type": "application/json" },
        }).done(success).fail(failure);
    }

    static post(endpoint, success, data = {}, failure = HttpClient.defaultFailureHandler) {
        console.log("POST triggered");
        console.log(JSON.stringify(data));
        return $.ajax({
            url: endpoint,
            method: "POST",
            xhrFields: { withCredentials: true },
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(data),
        }).done(success).fail(failure);
    }

    static put(endpoint, success, data = {}, failure = HttpClient.defaultFailureHandler) {
        console.log("PUT triggered");
        console.log(JSON.stringify(data));
        return $.ajax({
            url: endpoint,
            method: "PUT",
            xhrFields: { withCredentials: true },
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(data),
        }).done(success).fail(failure);
    }

    static remove(endpoint, success, data = {}, failure = HttpClient.defaultFailureHandler) {
        console.log("DELETE triggered");
        console.log(JSON.stringify(data));
        return $.ajax({
            url: endpoint,
            method: "DELETE",
            xhrFields: { withCredentials: true },
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(data),
        }).done(success).fail(failure);
    }
}
