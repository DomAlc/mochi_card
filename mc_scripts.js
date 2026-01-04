SnapExtensions.primitives.set(
  'mc_setMochiLogo()',
  function () {
    IDE_Morph.prototype.createLogo = function () {
      var myself = this;

      if (this.logo) {
        this.logo.destroy();
      }

      this.logo = new Morph();

      this.logo.texture = "data:image/png;base64," +
        "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLE" +
        "BYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFB" +
        "QUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAcAI4DASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAkIBgcD/8QAMBA" +
        "AAQIGAQMBBwMFAAAAAAAAAQIDAAQFBgcREggTIRQJFhciMUFRFTKBNEJhcZH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/E" +
        "ABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8AlVCEbN6F+l6xL3sO+8zZe9S7jqz0FIp8stTap18JClAlJ" +
        "BIAUgBII5KWPOgdhjKEVbd6bukhzEw6mZakVlePGJFQXZnqVAOT3dDQbJKyoK5fLx58fIVvXg+Y5b6E7IyxfGD6/hd52h" +
        "WXlArDshMrLq6Z2kd15aQokkBCVgpJIC0gb0oasSp5QikqW+i45X+A/uBV+frP0T4g/qCu76/l2+WuX7e58u+PHf8Abx8" +
        "xy+Keg+wLGq2W71zJcL01i/HtXdpDQp5LbtWfQU/L48jXNCOKSCVkjYCSShWAoRs7L989HWScW3ILNsy4sbXtTmQujKUp" +
        "b7VRXsDg4O44lII+pOiPqCfoetuPouncidCuE6/jGwFVy9p+amn6zPSIT6hxkqdCe4VKA4gpSB+P5MCsG0xiXmalKMzcw" +
        "ZSUcdQh6YCCvtIJAUriProbOvvqO9z/AGbYth5Jm6Rjq8V31bDbDK2qwuXLBU4pAK0aOt8T43/H2jYPWx0mWfhel9NNJk" +
        "LfapVZrIbp1wuNLVym3ty3cK/JHLk44Nj8/wCBHkXtLcSWrhbqgnbfs2js0KiKpUnNJkpcqKELUkhRGySNlO/9kwGVYQh" +
        "EUhCEAhCEAhCEAigGFbzotc9lLl+0WarJyVwUyqpnXZN59Lbr7K3ZZSSlJO1b4LT4+6dRP+EB6Izn+92MIv4lRVU+4z9Q" +
        "FTXIFhBV3ho+HNcgnYB471sRQTH+eLO6d+nXpEuaoVlioTtOqdQE7IybqXXWJKZDyH1qQDsFsqaOvvoiJbwipFOB0H2Mn" +
        "PPxm+MdpfBkVT3k73rh6rXc73p9ft/d43vlrxx3H1sfPWHOqG3M24WuS5zY1KuW65m4rZr1S0htSlupXpZUQkHmgkJURt" +
        "LmtgiJhbOtb8fiEKRtbMvSDg/p7xPcM5XM2S17ZAeaAoVJtntFsObHzPAKcPDW9klOvtsx3uUM1VCy/Zm4JFmXw/Q7ibq" +
        "b0vMtUapFmZ7YMyVJWEKCtAlB8/lP5ETshAilPWXlOjXLY3RvOv3LLVioMNy0/U31TaXnUf0ncW8dkg8kr2VedpV+I8g9" +
        "rLclKufq6nJmj1KVqks1RZFpT8m8l1AXxUrXJJI3pQ/7GNYQpmQhCERSEIQCEIQCEIQH/9k=";

      this.logo.render = function (ctx) {
        var gradient = ctx.createLinearGradient(
          0,
          0,
          this.width(),
          0
          );
        gradient.addColorStop(0, 'black');
        gradient.addColorStop(0.5, myself.frameColor.toString());
        ctx.fillStyle = MorphicPreferences.isFlat ?
          myself.frameColor.toString() : gradient;
        ctx.fillRect(0, 0, this.width(), this.height());
        if (this.cachedTexture) {
          this.renderCachedTexture(ctx);
        } else if (this.texture) {
          this.renderTexture(this.texture, ctx);
        }
      };

      this.logo.renderCachedTexture = function (ctx) {
        ctx.drawImage(
          this.cachedTexture,
          5,
          Math.round((this.height() - this.cachedTexture.height) / 2)
          );
        this.changed();
      };

      this.logo.mouseClickLeft = function () {
        myself.snapMenu();
      };

      this.logo.color = BLACK;
      this.logo.setExtent(new Point(200, 28)); // dimensions are fixed
      this.add(this.logo);
    };
    var stage = this.parentThatIsA(StageMorph),
      ide = stage.parentThatIsA(IDE_Morph),
      world = stage.parentThatIsA(WorldMorph);
    ide.createLogo();
    ide.createControlBar();
    ide.fixLayout();
  }
);

SnapExtensions.primitives.set(
    'mc_split(textToSplit, index)',
    function (textToSplit, index ,proc) {
      var tokensArray = textToSplit.slice(3).split(",");
      if (index > tokensArray.length-1) {
        return -1; // error, index over array length
      } else {
        return tokensArray[index];	
      }
    }
);

SnapExtensions.primitives.set(
    'mc_isopen(port)',
    function (port, proc) {
      return (port?.writable != null)   
    }
);

SnapExtensions.primitives.set(
  'mc_open(baud, buffer)',
  function (baud, buffer, proc) {

    var acc = proc.context.accumulator;

    // filtros USB conocidos
    const FILTERS = [
      { usbVendorId: 0x1A86, usbProductId: 0x7523 }, // CH340
      { usbVendorId: 0x0403, usbProductId: 0x6001 }  // FTDI
    ];

    const DEFAULT_BAUD   = baud   || 115200;
    const DEFAULT_BUFFER = buffer || 512; // suficiente para Snap + Arduino

    // cierre forzado y seguro
    async function forceClose(port) {
      try {
        if (!port) return;

        if (port.mochi?.reader) {
          await port.mochi.reader.cancel();
          port.mochi.reader = null;
        }

        if (port.readable) {
          try { await port.readable.cancel(); } catch {}
        }

        if (port.writable) {
          try { await port.writable.abort(); } catch {}
        }

        if (port.readable || port.writable) {
          await port.close();
        }
      } catch (e) {
        console.warn('forceClose error:', e);
      }
    }

    // inicialización async (solo una vez)
    if (!acc) {
      acc = proc.context.accumulator = { result: false };

      (async function () {
        try {
          // solicitar puerto al usuario
          const port = await navigator.serial.requestPort({ filters: FILTERS });

          // cerrar si estaba medio abierto
          await forceClose(port);

          // abrir puerto
          await port.open({
            baudRate: DEFAULT_BAUD,
            bufferSize: DEFAULT_BUFFER
          });

          // estructura interna Mochi (evitar propiedades privadas)
          port.mochi = {
            backlog: [],
            reader: null,
            disconnected: false
          };

          // detectar desconexión física
          port.addEventListener('disconnect', () => {
            port.mochi.disconnected = true;
            console.warn('Puerto serial desconectado');
          });

          acc.result = port;

        } catch (e) {
          acc.result = e;
        }
      })();

    }
    // resultado disponible
    else if (acc.result !== false) {

      if (acc.result instanceof Error) {
        throw acc.result;
      }

      return acc.result;
    }

    // Snap: yield mientras esperamos
    proc.pushContext('doYield');
    proc.pushContext();
  }
);


SnapExtensions.primitives.set(
  'mc_isValidFrame(frame)',
  function (frame, proc) {
    try {
      return (frame.slice(0,3) === '#0A');
    } catch(e) {
      return false;
    }
  }
);

SnapExtensions.primitives.set(
  'mc_buildFrame(fun, payload)',
  function (fun, payload, proc) {
    var frame = new List(Array.from(new TextEncoder().encode('#'+fun+payload+'\n')));
    return frame;
  }
);




