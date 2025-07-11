from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/api/profile')
def profile():
    return jsonify({"name": "Luna", "age": 12, "hobby": "Drawing"})

if __name__ == '__main__':
    app.run(port=5000)
