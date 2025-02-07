from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = [
    {"id": 1, "name": "Alice", "age": 10, "profile_picture": "https://via.placeholder.com/150"},
    {"id": 2, "name": "Bob", "age": 12, "profile_picture": "https://via.placeholder.com/150"},
    {"id": 3, "name": "Charlie", "age": 11, "profile_picture": "https://via.placeholder.com/150"}
]

@app.route("/users", methods=["GET"])
def get_users():
    return jsonify(users)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
