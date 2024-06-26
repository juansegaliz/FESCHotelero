﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.Response
{
    public class ResponseDTO<T>
    {
        public int Code { get; set; } = 0;
        public T Data { get; set; }
        public List<string> Messages { get; set; } = new List<string>();

        public ResponseDTO()
        {

        }

        public ResponseDTO(HttpStatusCode code)
        {
            SetCode(code);
        }

        public ResponseDTO(HttpStatusCode code, T data, List<string> messages)
        {
            SetCode(code);
            Data = data;
            Messages = messages;
        }

        public void AddMessage(string message) => this.Messages.Add(message);
        public void SetData(T data) => this.Data = data;
        public void SetCode(HttpStatusCode code) => this.Code = (int)code;
    }
}
