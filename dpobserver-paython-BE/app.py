
from flask import Flask, request, jsonify
import json
import clusters as cls



app = Flask(__name__)


@app.route("/")
def index():
    return json.dumps({'name': 'alice',
                    'email': 'alice@outlook.com'})


@app.route('/model', methods=['POST'])
def update_record():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        jsonRes = request.json
        result = cls.predict(jsonRes['data'])
        return json.dumps(result)
    else:
        return 'Content-Type not supported!'


if __name__ == "__main__":
    app.run(host='127.0.0.1')
